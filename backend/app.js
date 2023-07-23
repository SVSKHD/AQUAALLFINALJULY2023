const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const Cors = require("cors")
const App = express();

//swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
//api for swagger ui docs
App.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

//custom error
const productionError = require("./middlewares/productionError");



//middlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(productionError);
App.use(morgan("tiny"));
App.use(Cors())
//cookies and file middlreware
App.use(cookieParser());
App.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//routes and loop of routes
readdirSync("./routes/ecom/").map((r) =>
  App.use("/api", require("./routes/ecom/" + r))
);

readdirSync("./routes/crm/").map((r) =>
  App.use("/crm", require("./routes/crm/" + r))
);


module.exports = App;
