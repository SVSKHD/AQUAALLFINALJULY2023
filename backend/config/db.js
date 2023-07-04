const mongoose = require("mongoose")

const DbConnect = () => {
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Db got connect to ${process.env.PORT}`)
    })
        .catch((err) => {
            console.log(`Db  connection Failed ${err}`)
        })
}




module.exports = DbConnect