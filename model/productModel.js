const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    ProductName : {type: String},

    Price: {type: Number},

    Availability:{type: Boolean} ,

    Category: {type: String},
})

module.exports = mongoose.model("Products", userSchema);

