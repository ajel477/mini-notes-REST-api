const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {

    mongoose.connect("mongodb+srv://ajelmathew04_db_user:YT1bEGs1yJ26kEK0@cluster47.u6pdi94.mongodb.net/backendDB")
    .then(() => {
        console.log("MongoDB connected")
    })

}

module.exports = connectDB;