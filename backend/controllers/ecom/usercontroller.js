const AquaUsers = require("../../models/ecom/user");
const BigPromise = require("../../middlewares/bigPromise");
const CustomError = require("../../utils/customError");
const cookieToken = require("../../utils/cookieToken");
const cloudinary = require("cloudinary");
const mailHelper = require("../../utils/emailHelper");
const crypto = require("crypto");

exports.signup = BigPromise(async (req, res, next) => {
  //let result;
  console.log(req.body);
  // if (!req.files) {
  //   return next(new CustomError("photo is required for signup", 400));
  // }

  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return next(new CustomError("Name, email and password are required", 400));
  }

  // let file = req.files.photo;

  // const result = await cloudinary.v2.uploader.upload(file.tempFilePath, {
  //   folder: "AquaUserss",
  //   width: 150,
  //   crop: "scale",
  // });

  const AquaUser = await AquaUsers.create({
    name,
    email,
    password,
    // photo: {
    //   id: result.public_id,
    //   secure_url: result.secure_url,
    // },
  });

  cookieToken(AquaUser, res);
});

exports.login = BigPromise(async (req, res, next) => {
  const { email, password } = req.body;

  // check for presence of email and password
  if (!email || !password) {
    return next(new CustomError("please provide email and password", 400));
  }

  // get AquaUsers from DB
  const AquaUser = await AquaUsers.findOne({ email }).select("+password");

  // if AquaUsers not found in DB
  if (!AquaUser) {
    return next(
      new CustomError("Email or password does not match or exist", 400)
    );
  }

  // match the password
  const isPasswordCorrect = await AquaUser.isValidatedPassword(password);

  //if password do not match
  if (!isPasswordCorrect) {
    return next(new CustomError("password does not match or exist", 400));
  }

  // if all goes good and we send the token
  cookieToken(AquaUser, res);
});

exports.logout = BigPromise(async (req, res, next) => {
  //clear the cookie
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  //send JSON response for success
  res.status(200).json({
    succes: true,
    message: "Logout success",
  });
});

exports.forgotPassword = BigPromise(async (req, res, next) => {
  // collect email
  const { email } = req.body;
  console.log(email);
  // find AquaUsers in database
  const AquaUsers = await AquaUsers.findOne({ email });

  // if AquaUsers not found in database
  if (!AquaUsers) {
    return next(new CustomError("Email not found as registered", 400));
  }

  //get token from AquaUsers model methods
  const forgotToken = AquaUsers.getForgotPasswordToken();

  // save AquaUsers fields in DB
  await AquaUsers.save({ validateBeforeSave: false });

  // create a URL
  // const myUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/v1/password/reset/${forgotToken}`;

  //URL for deployment as front end might be running at different URL
  const myUrl = `${process.env.FRONT_END}/password/reset/${forgotToken}`;

  // craft a message
  const message = `Copy paste this link in your URL and hit enter \n\n ${myUrl}`;

  // attempt to send email
  try {
    await mailHelper({
      email: AquaUsers.email,
      subject: "LCO TStore - Password reset email",
      message,
    });

    // json reponse if email is success
    res.status(200).json({
      succes: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    // reset AquaUsers fields if things goes wrong
    AquaUsers.forgotPasswordToken = undefined;
    AquaUsers.forgotPasswordExpiry = undefined;
    await AquaUsers.save({ validateBeforeSave: false });

    // send error response
    return next(new CustomError(error.message, 500));
  }
});

exports.passwordReset = BigPromise(async (req, res, next) => {
  //get token from params
  const token = req.params.token;

  // hash the token as db also stores the hashed version
  const encryToken = crypto.createHash("sha256").update(token).digest("hex");

  // find AquaUsers based on hased on token and time in future
  const AquaUsers = await AquaUsers.findOne({
    encryToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!AquaUsers) {
    return next(new CustomError("Token is invalid or expired", 400));
  }

  // check if password and conf password matched
  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new CustomError("password and confirm password do not match", 400)
    );
  }

  // update password field in DB
  AquaUsers.password = req.body.password;

  // reset token fields
  AquaUsers.forgotPasswordToken = undefined;
  AquaUsers.forgotPasswordExpiry = undefined;

  // save the AquaUsers
  await AquaUsers.save();

  // send a JSON response OR send token

  cookieToken(AquaUsers, res);
});

exports.getLoggedInAquaUsersDetails = BigPromise(async (req, res, next) => {
  //req.AquaUsers will be added by middleware
  // find AquaUsers by id
  const AquaUser = await AquaUsers.findById(req.AquaUsers.id);

  //send response and AquaUsers data
  res.status(200).json({
    success: true,
    AquaUser,
  });
});

exports.changePassword = BigPromise(async (req, res, next) => {
  // get AquaUsers from middleware
  const AquaUsersId = req.AquaUsers.id;

  // get AquaUsers from database
  const AquaUsers = await AquaUsers.findById(AquaUsersId).select("+password");

  //check if old password is correct
  const isCorrectOldPassword = await AquaUsers.isValidatedPassword(
    req.body.oldPassword
  );

  if (!isCorrectOldPassword) {
    return next(new CustomError("old password is incorrect", 400));
  }

  // allow to set new password
  AquaUsers.password = req.body.password;

  // save AquaUsers and send fresh token
  await AquaUsers.save();
  cookieToken(AquaUsers, res);
});

exports.updateAquaUsersDetails = BigPromise(async (req, res, next) => {
  // add a check for email and name in body

  // collect data from body
  const newData = {
    name: req.body.name,
    email: req.body.email,
  };

  // if photo comes to us
  if (req.files) {
    const AquaUsers = await AquaUsers.findById(req.AquaUsers.id);

    const imageId = AquaUsers.photo.id;

    // delete photo on cloudinary
    const resp = await cloudinary.v2.uploader.destroy(imageId);

    // upload the new photo
    const result = await cloudinary.v2.uploader.upload(
      req.files.photo.tempFilePath,
      {
        folder: "AquaUserss",
        width: 150,
        crop: "scale",
      }
    );

    // add photo data in newData object
    newData.photo = {
      id: result.public_id,
      secure_url: result.secure_url,
    };
  }

  // update the data in AquaUsers
  const AquaUsers = await AquaUsers.findByIdAndUpdate(
    req.AquaUsers.id,
    newData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

exports.adminAllAquaUsers = BigPromise(async (req, res, next) => {
  // select all AquaUserss
  const AquaUserss = await AquaUsers.find();

  // send all AquaUserss
  res.status(200).json({
    success: true,
    AquaUserss,
  });
});

exports.admingetOneAquaUsers = BigPromise(async (req, res, next) => {
  // get id from url and get AquaUsers from database
  const AquaUsers = await AquaUsers.findById(req.params.id);

  if (!AquaUsers) {
    next(new CustomError("No AquaUsers found", 400));
  }

  // send AquaUsers
  res.status(200).json({
    success: true,
    AquaUsers,
  });
});

exports.adminUpdateOneAquaUsersDetails = BigPromise(async (req, res, next) => {
  // add a check for email and name in body

  // get data from request body
  const newData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  // update the AquaUsers in database
  const AquaUsers = await AquaUsers.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

exports.adminDeleteOneAquaUsers = BigPromise(async (req, res, next) => {
  // get AquaUsers from url
  const AquaUsers = await AquaUsers.findById(req.params.id);

  if (!AquaUsers) {
    return next(new CustomError("No Such AquaUsers found", 401));
  }

  // get image id from AquaUsers in database
  const imageId = AquaUsers.photo.id;

  // delete image from cloudinary
  await cloudinary.v2.uploader.destroy(imageId);

  // remove AquaUsers from databse
  await AquaUsers.remove();

  res.status(200).json({
    success: true,
  });
});

exports.managerAllAquaUsers = BigPromise(async (req, res, next) => {
  // select the AquaUsers with role of AquaUsers
  const AquaUserss = await AquaUsers.find({ role: "AquaUsers" });

  res.status(200).json({
    success: true,
    AquaUserss,
  });
});
