const {body}=require('express-validator')

const validateLogin = [
    body("email").trim().isEmail().withMessage("Please provide a valid email."),
    body("password").trim().isLength({ min: 5 ,max:34}).withMessage("Password must be at least 5 characters long."),
  ];

module.exports=validateLogin