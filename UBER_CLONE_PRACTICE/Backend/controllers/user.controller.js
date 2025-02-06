const userModel = require('../models/user.model');
const userService=require('../services/user.service')
const {validationResult}=require('express-validator')

module.exports.registerUser=async(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {fullname,email,password}=req.body

    const hasedPassword=await userModel.hasedPassword(password)

    const user=await userService.createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hasedPassword})

    const token=user.generateAuthToken()

    res.status(201).json({token,user})



}


module.exports.loginUser=async(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {email,password}=req.body
    const user=await userModel.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({error:'Invalid email or password'})
    }

    const isMatch=await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({error:'Invalid email or password'})
    }

    const token=user.generateAuthToken()
    res.cookie('token',token);


    res.status(200).json({token,user})

}

module.exports.getUserProfile=async(req,res,next)=>{
    res.status(200).json(req.user)
}