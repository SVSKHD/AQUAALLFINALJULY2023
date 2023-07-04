const express = require("express")
require("dotenv").config()
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload");
const productionError = require("./")

const App = express()


App.use(express.json())
App.use(express.urlencoded({extended:true}))
App.use(cookieParser())
App.use( fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }))



module.exports = App
