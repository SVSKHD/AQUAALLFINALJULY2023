const AquaUsers = require("../models/ecom/user");
const BigPromise = require("../middlewares/bigPromise");
const CustomError = require("../utils/customError");
const jwt = require("jsonwebtoken");

exports.isLoggedIn = BigPromise(async (req, res, next) => {
  // const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");

  // check token first in cookies
  let token = req.cookies.token;

  // if token not found in cookies, check if header contains Auth field
  if (!token && req.header("Authorization")) {
    token = req.header("Authorization").replace("Bearer ", "");
  }

  if (!token) {
    return next(new CustomError("Login first to access this page", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.AquaUsers = await AquaUsers.findById(decoded.id);

  next();
});

exports.customRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.AquaUsers.role)) {
      return next(new CustomError("You are not allowed for this resouce", 403));
    }
    console.log(req.AquaUsers.role);
    next();
  };
};
