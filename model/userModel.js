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
      Products: [
      {type: mongoose.Schema.Types.ObjectId, ref: "Products"}
      ],

      books: [
        {type: mongoose.Schema.Types.ObjectId, ref: "books"}
      ]
  });
 
 module.exports = mongoose.model('User', userSchema);
 