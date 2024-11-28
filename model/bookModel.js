const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Title: {type: String},
    Discription: {type: String},
    Category: {type: String},
})

module.exports = mongoose.model("books", userSchema);