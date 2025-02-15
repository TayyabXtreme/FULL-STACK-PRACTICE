const userModel=require('../models/user.model')
const userService=require('../services/user.service')
const { validationResult } = require('express-validator')
const blacklistTokenModel=require('../models/blacklistToken.model')

module.exports.registerUser=async(req,res,next)=>{
    try {
        
    
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    

    const {fullname,email,password}=req.body
    const isUserAlreadyExist=await userModel.findOne({email})
    if(isUserAlreadyExist){
        return res.status(401).json({message:'email already exist'})
    }
    const hasedPassword=await userModel.hasedPassword(password)

    const user=await userService.createUser({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hasedPassword})
    const token=user.generateAuthToken();

    res.status(201).json({
        user,
        token
    })

} catch (error) {
    console.log(`user controller error: ${error}`)
        
}


}

module.exports.loginUser=async(req,res,next)=>{
    try {
        
    
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }

        const {email,password}=req.body

        const user=await userModel.findOne({email}).select('+password')

        if(!user){
            return res.status(401).json({message:'invalid email or password'})

        }

        const isMatch=await user.comparePassword(password)

        if(!isMatch){
            return res.status(401).json({message:'invalid email or password'})
        }

        const token=user.generateAuthToken();

        res.cookie('token',token)

        res.status(200).json({token,user})

    }catch(e){
        console.log(`user controller error: ${e}`)
    }
}

module.exports.getUserProfile=(req,res,next)=>{
    const user=req.user
    return res.status(200).json({
        user
    })
}

module.exports.logoutUser=async(req,res,next)=>{
    const token=req.cookies.token || req.headers?.authorization?.split(' ')[1]
    await blacklistTokenModel.create({token})

    res.clearCookie('token');
    res.status(200).json({message:'logout successfully'})
}