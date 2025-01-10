const express=require('express')
const {validationResult } = require('express-validator');
const router=express.Router();
const {registerUser}=require('../controller/auth.controller')
const validateRegister=require('../middleware/register.validation')

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
    const result = await registerUser(username, email, password);
    return res.status(result.status).json({
      success: result.success,
      message: result.message,
      user: result.user || null, // Only include user if it exists
    });
  });


module.exports=router