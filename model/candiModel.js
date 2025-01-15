const mongoose =  require("mongoose")

const candiSchema = new mongoose.Schema({
    Name: {type: String},
    Institution:  {type: String},
     Courses:  {type: String},
     CGP:  {type: Number},

})
module.exports = mongoose.model("Candidate", candiSchema);
