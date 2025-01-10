const {body}=require('express-validator')

const validateRegister = [
    body("email").trim().isEmail().withMessage("Please provide a valid email."),
    body("username").trim().isLength({ min: 3, max: 12 }).withMessage("Username must be between 3 and 12 characters."),
    body("password").trim().isLength({ min: 5 ,max:34}).withMessage("Password must be at least 5 characters long."),
  ];

module.exports=validateRegister