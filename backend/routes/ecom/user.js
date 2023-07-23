const express = require("express")
const Router  = express.Router()

const {
  signup,
  login,
  logout,
  forgotPassword,
  passwordReset,
  getLoggedInAquaUsersDetails,
  changePassword,
  updateAquaUsersDetails,
  adminAllAquaUsers,
  managerAllAquaUsers,
  admingetOneAquaUsers,
  adminUpdateOneAquaUsersDetails,
  adminDeleteOneAquaUsers,
} = require("../../controllers/ecom/usercontroller");
const { isLoggedIn, customRole } = require("../../middlewares/user");

Router.route("/signup").post(signup);
Router.route("/login").post(login);
Router.route("/logout").get(logout);
Router.route("/forgotPassword").post(forgotPassword);
Router.route("/password/reset/:token").put(passwordReset);
Router.route("/userdashboard").get(isLoggedIn, getLoggedInAquaUsersDetails);
Router.route("/password/update").put(isLoggedIn, changePassword);
Router.route("/userdashboard/update").put(isLoggedIn, updateAquaUsersDetails);

//admin only routes
Router.route("/admin/users").get(isLoggedIn, customRole("admin"), adminAllAquaUsers);
Router
  .route("/admin/user/:id")
  .get(isLoggedIn, customRole("admin"), admingetOneAquaUsers)
  .put(isLoggedIn, customRole("admin"), adminUpdateOneAquaUsersDetails)
  .delete(isLoggedIn, customRole("admin"), adminDeleteOneAquaUsers);

// manager only route
Router
  .route("/manager/users")
  .get(isLoggedIn, customRole("manager"), managerAllAquaUsers);


module.exports = Router