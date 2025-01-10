const express=require('express')

const router=express.Router();
const userModel=require('../model/user.model')


router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
  
    try {
      
      const existingUser = await userModel.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with the provided username or email.",
        });
      }
  
      // Create the new user
      const newUser = await userModel.create({
        username,
        email,
        password,
        role: "user",
      });
  
      // Return success response
      return res.status(201).json({
        success: true,
        message: "User created successfully.",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error during registration:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred during user registration. Please try again later.",
      });
    }
  });


module.exports=router