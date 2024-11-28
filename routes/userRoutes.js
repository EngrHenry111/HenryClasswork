// const userController = require("../controller/userController")
// const express = require("express")
 
// const userRoutes = express.Router()

// userRoutes.post("/new-user", userController.createUser)
// userRoutes.get("/get-all-users", userController.getAllUser)
// userRoutes.get("/get-one-user/:id", userController.getOneById)
// userRoutes.get("/get-all-users-name", userController.getOneByName)
// userRoutes.get("/update-user/:id", userController.updateUser)
// userRoutes.get("/delete-user", userController.deleteUser)

// module.exports = userRoutes;


const userController = require('../controller/userController');
const express = require('express');

const userRoutes = express.Router();

// userRoutes.post("/new-user" , userController.createUser)
userRoutes.post('/new-user', userController.createUser);
userRoutes.get('/get-all-users', userController.getAllUsers);
userRoutes.get('/get-one-user/:id', userController.getOneById);
userRoutes.get('/get-one-user-name', userController.getOneByName);
userRoutes.patch('/update-user/:id', userController.updateUser);
userRoutes.delete('/delete-user/:id', userController.deleteUser);
userRoutes.delete('/delete-user-name', userController.getOneAndDelete);

module.exports = userRoutes;