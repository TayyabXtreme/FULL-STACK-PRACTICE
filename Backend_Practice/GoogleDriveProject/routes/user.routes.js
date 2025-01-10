const express=require('express');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const userModel=require('../models/user.model');
const bycrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


router.get('/test',(req,res)=>{
    res.send('User test route');
})

router.get('/register',(req,res)=>{
    res.render('register');
})

router.post('/register',
body('email').trim().isEmail().isLength({min:5}),
body('password').trim().isLength({min:5}),
body('username').trim().isLength({min:5})
,async(req,res)=>{
    const errors=validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
      return  res.status(400).json({errors:errors.array(),message:'Validation failed'});
    }
    
    const {username,email,password}=req.body;
    const hasedPassword=await bycrypt.hash(password,10);
    const newUser=await userModel.create({username,email,password:hasedPassword});
    res.json(newUser);
})



router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',
body('email').trim().isEmail().isLength({min:5}),
body('password').trim().isLength({min:5}),
async(req,res)=>{
    const errors=validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
      return  res.status(400).json({errors:errors.array(),message:'Validation failed'});
    }
    
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(404).json({message:'User not found'});
    }
    const isMatch=await bycrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid credentials'});
    }
    const token=jwt.sign({
        userID:user._id,
        email:user.email,
        username:user.username


        
    },process.env.JWT_SECRET);

    

    res.cookie('token',token);
    res.send('Logged in successfully');
})

module.exports=router;