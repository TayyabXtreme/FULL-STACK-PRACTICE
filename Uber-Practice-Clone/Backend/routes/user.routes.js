const express=require('express')
const router=express.Router()
const {body}=require('express-validator')
const userController=require('../controllers/user.controller')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be 3 character '),
    body('password').isLength({min:6}).withMessage('password must be 6 character ')
],
userController.registerUser
)


module.exports=router