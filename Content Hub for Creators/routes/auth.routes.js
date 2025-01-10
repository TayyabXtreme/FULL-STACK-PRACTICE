const express=require('express')
const {validationResult } = require('express-validator');
const router=express.Router();
const {registerUser,loginUser}=require('../controller/auth.controller')
const validateRegister=require('../middleware/register.validation')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const validateLogin=require('../middleware/login.validation')
router.post("/register", 
 validateRegister,
  
 
  async (req, res) => {
    const { username, email, password } = req.body;

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation Errors:", errors.array());
    return res.status(400).json({
      errors: errors.array(),
      message: "Validation failed. Check your input.",
    });
  }
  const hasedPassword=await bcrypt.hash(password,10)
    const result = await registerUser(username, email, hasedPassword);
    if(result.success){
      
      const token=jwt.sign({
        userID:result.user._id,
        email:result.user.email,
        username:result.user.username


        
    },process.env.JWT_SECRET);

    res.cookie('chtoken',token)
    }
    return res.status(result.status).json({
      success: result.success,
      message: result.message,
      user: result.user || null, 
    });
  });


  router.post('/login',validateLogin,async (req,res)=>{
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation Errors:", errors.array());
    return res.status(400).json({
      errors: errors.array(),
      message: "Validation failed. Check your input.",
    });
  }
  const {email,password}=req.body
  const result=await loginUser(email,password,bcrypt)
  if(result.success){
      
    const token=jwt.sign({
      userID:result.user._id,
      email:result.user.email,
      username:result.user.username


      
  },process.env.JWT_SECRET);

  res.cookie('chtoken',token)
  }
  return res.status(result.status).json({
    success: result.success,
    message: result.message,
    user: result.user || null, 
  });
  })

  router.get('/checkauth', (req, res) => {
    const token = req.cookies.chtoken; // Use 'chtoken' as per the `res.cookie` call
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not found' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ message: 'Authorized', user: decoded });
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    }
});


module.exports=router