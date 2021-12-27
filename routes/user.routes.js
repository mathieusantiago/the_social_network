//import express framwork
const router = require('express').Router();
//import controller authentificator 
const authController = require('../controllers/auth.controller');
//import the user controllers
const userController = require('../controllers/user.controller'); 
//importe the upload controller
const uploadController = require('../controllers/upload.controller')
//import multer for upload picture
const multer = require('multer')
const upload = multer()

//Auth if router is /register eles execut function SignUp in to authController
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

//user data base 
router.get("/", userController.getAllUsers);
router.get("/:id", userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.patch("/follow/:id", userController.follow);
router.patch("/unfollow/:id", userController.unfollow);

//upload image 
router.post("/upload", upload.single("file"), uploadController.uploadProfil);

//export router 
module.exports = router;