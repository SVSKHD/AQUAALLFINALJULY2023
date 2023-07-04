const App = require("./app")
const DbConnect = require("./config/db")

DbConnect()

const PORT = process.env.PORT

App.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})