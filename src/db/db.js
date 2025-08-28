const mongoose = require("mongoose");

function connectDB() {

    mongoose.connect()
    .then(() => {
        console.log("MongoDB connected");
    })

}

module.exports = connectDB;