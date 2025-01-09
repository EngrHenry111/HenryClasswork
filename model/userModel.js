//importing
// const mongoose = require("mongoose")

// const userSchema = new mongoose.Schema({
//     name: {type: String},
//     email: {type: String},
//     password: {type: String},
// });

// module.exports = mongoose.model('user', userSchema);


//import
const mongoose = require("mongoose")
 
 
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      //required : true
     },
    email: {
       type: String,
       //unique : true,
       //required : true
      },
    password: {
       type: String ,
      // minlength : 6,
      // maxlength : 12,
      // required : true
      },
      products: [
      {type: mongoose.Schema.Types.ObjectId,
         ref: "Products"},
      ],

      Books: [
        {type: mongoose.Schema.Types.ObjectId,
           ref: "Books"},
      ],
  });
 
 module.exports = mongoose.model('User', userSchema);
 