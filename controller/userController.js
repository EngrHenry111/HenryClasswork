//   const UserModel= require("../model/userModel")
 

 
//   //post method
// exports.createUser = async(req , res)=>{
// try {
//     const {name , email , password} = req.body
//     if(!name && !email && !password){
//       return res.status(400).json({
//         messaage: "all fields must be filled"
//       })
//     }else if (!name){
//       return res.status(400).json({
//         message: "please enter your name"
//       })
//     }else if (!email){
//       return res.status(400).json({
//         message: "please enter your email"
//       })
//     }else if (!password){
//       return res.status(400).json({
//         message: "please enter your password"
//       })
//     }else if ("!name ||  !email || !password "){
//       return res.status(400).json({
//         message: "please enter the valid info"
//       })
//     }
//     const newUser = await UserModel.create({
//         name , email , password
//     })
//     return res.status(201).json({
//         message : "user signed up",
//         data : newUser
//     })
// } catch (error) {
//     console.error("unable to sign up" , error)
// }
//   }
 
// //get method
// exports.getAllUsers = async(req , res)=>{
//   try {
//     const users = await UserModel.find()
//     if(!users){
//       return res.status(200).json({
//         message: "user cannot be found"
//       })
//     }
//     return res.status(200).json({
//       message : "gotten all users",
//       data : users
//     })
//   } catch (error) {
//     return res.status(400).json({
//       message : "couldn't get users",
//       error
//     })
//   }
// }
 
 
// //get one method
// exports.getOneById = async(req , res)=>{
//   try {
//     // const {id} = req.params
//     // const users = await UserModel.findById({id})
//     const users = await UserModel.findById(req.params.id)
//     return res.status(200).json({
//       message : "gotten the user",
//       data : users
//     })
//   } catch (error) {
//     return res.status(400).json({
//       message : "couldn't get user",
//       error
//     })
//   }
// }
 


// exports.getOneByName = async(req , res)=>{
//   try{
//     const {name} = req.body
//     const users = await UserModel.findOne({name})
//     return res.status(200).json({
//       message: "gotten the user",
//       data: users
//     })

//  }catch(error){
// return res.status(400).json({
//   message: "can't get user",
//   error
// })
//  }

//  }
// //update method
// exports.updateUser = async(req, res)=>{
//   try {
//     const {id} = req.params
//     const {password , name} = req.body
//     const update = await UserModel.findByIdAndUpdate(id , {password , name} , {new:true})
//     // const update = await UserModel.findByIdAndUpdate(req.params.id , req.body.password , {new:true})
//     return res.status(202).json({
//       message : "updated",
//       data : update
//     })
//   } catch (error) {
//     return res.status(400).json({
//       message : "failed to update user",
//       error
//     })
//   }
// }
 
// //delete method
// exports.deleteUser = async(req, res)=>{

//   try {
//     const removeUser = await UserModel.findByIdAndDelete(req.params.id)
 
//     return res.status(200).json({
//       message :"user deleted",
//       data : removeUser
//     })
//   } catch (error) {
//     return res.status(400).json({
//       message : "couldn't delete user",
//       error
//     })
//   }
// }


//   //delete method
//   exports.deleteUser = async(req, res)=>{
//     try{
//       const removeUser = await UserModel.findByIdAndDelete(req.params.id)
//       return res.status(200).json({
//         message: "user delete",
//         data: removeUser
//       })
//     }catch (error) {
//       return res.status(400).json({
//         message: "couldn't delete user",
//         error
//       })
//     }
    
//   }


//   exports.deleteOneUser = async(req, res)=>{
//     try{
//       const {id} = req.params
//       const {password, name} = req.body
//       const deleteOne = await UserModel.findOneAndDelete({name}, {new: true})
//       return res.status(202).json({
//         message: "delete one",
//         data: deleteOne

//       })
//     }catch (error){
//       return res.status(400).json({
//         message: "failed to delete",
//         error
//       })
//     }
//   }


const UserModel = require('../model/userModel');


//user sign up
// exports.createUser = async (req, res) => {
//     try {
//       const user = new UserModel(req.body);
//       await user.save();
//       res.status(201).send(user);
//     } catch (error) {
//       res.status(400).send(error);
//     }
//   };

//post method
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // if (!name && !email && !password) {
    //   return res.status(400).json({
    //     message: 'all fields must be filled',
    //   });
    // } else if (!name) {
    //   return res.status(400).json({
    //     message: 'Please enter your name',
    //   });
    // } else if (!email) {
    //   return res.status(400).json({
    //     message: 'Please enter your email',
    //   });
    // } else if (!password) {
    //   return res.status(400).json({
    //     message: 'Please enter your password',
    //   });
    // } else if (!name || !email || !password) {
    //   return res.status(400).json({
    //     message: 'Please enter your valid info',
    //   });
    // }
    const newUser = await UserModel.create({
      name,
      email,
      password,
    });
    return res.status(201).json({
      message: 'user signed up',
      data: newUser,
    });
  } catch (error) {
    console.error('unable to sign up', error);
  }
};

//get method
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({
      message: 'gotten all users',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get users",
      error,
    });
  }
};

//get one method
exports.getOneById = async (req, res) => {
  try {
    // const {id} = req.params
    // const users = await UserModel.findById({id})
    const users = await UserModel.findById(req.params.id);
    return res.status(200).json({
      message: 'gotten the user',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get user",
      error,
    });
  }
};

exports.getOneByName = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(404).json({
        message: 'Please enter a name',
      });
    }
    const users = await UserModel.findOne({ name });
    return res.status(200).json({
      message: 'gotten the user',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't get user",
      error,
    });
  }
};
//update method
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, name } = req.body;
    const update = await UserModel.findByIdAndUpdate(
      id,
      { password, name },
      { new: true }
    );
    //const update = await UserModel.findByIdAndUpdate(req.parms.id, req.body.password, {new:true})
    return res.status(202).json({
      message: 'updated',
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: 'failed to update user',
      error,
    });
  }
};

//delete method
exports.deleteUser = async (req, res) => {
  try {
    const removeUser = await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: 'user deleted',
      data: removeUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete user",
      error,
    });
  }
};

exports.getOneAndDelete = async (req, res) => {
  try {
    const { name } = req.body;
    const users = await UserModel.findOneAndDelete({ name });
    return res.status(200).json({
      message: 'user deleted',
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "couldn't delete user",
      error,
    });
  }
};
