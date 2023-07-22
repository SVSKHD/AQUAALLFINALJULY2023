const App = require("./app");
const DbConnect = require("./config/db");
const Cloudinary = require("cloudinary");

DbConnect();

//cloudinary
Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;

App.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
