const express=require('express');


const router=express.Router();
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')
const authMiddleware=require('../middlewares/auth.middleware')


router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('fullname.firstname').isLength({min:3,max:20}).withMessage('Firstname should be atleast 3 characters long and should not exceed 20 characters'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long')
],userController.registerUser)


router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({min:6}).withMessage('Password should be atleast 6 characters long')
],userController.loginUser)


router.get('/profile',authMiddleware.authUser,userController.getUserProfile)




module.exports=router