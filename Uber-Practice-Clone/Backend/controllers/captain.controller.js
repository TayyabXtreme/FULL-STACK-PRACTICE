const captainModel=require('../models/captain.model')
const captainService=require('../services/captain.service')
const {validationResult}=require('express-validator')
const blacklistTokenModel=require('../models/blacklistToken.model')
module.exports.registerCaptain=async(req,res,next)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }
        const {fullname,email,password,vehicle}=req.body

        const isCaptainAlreadyExist=await captainModel.findOne({email})
        if(isCaptainAlreadyExist){
            return res.status(401).json({message:'email already exist'})
        }

        const hasedPassword=await captainModel.hasedPassword(password)

        const captain=await captainService.createCaptain({firstname:fullname.firstname,lastname:fullname.lastname,email,password:hasedPassword,color:vehicle.color,plate:vehicle.plate,capacity:vehicle.capacity,vehicleType:vehicle.vehicleType})

        const token=captain.generateAuthToken();

        return res.status(201).json({captain,token})
        
        
    } catch (error) {
        console.log(`captain controller error: ${error}`)
        return res.status(500).json({message:'server error',error})
    }



}

module.exports.loginCaptain=async(req,res,next)=>{
    try {
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({error:errors.array()})
        }

        const {email,password}=req.body

        const captain=await captainModel.findOne({email}).select('+password')

        if(!captain){
            return res.status(401).json({message:'invalid email or password'})
        }

        const isMatch=await captain.comparedPassword(password)
        if(!isMatch){
            return res.status(401).json({message:'invalid email or password'})
        }

        const token=captain.generateAuthToken()

        res.cookie('token',token)

        res.status(200).json({captain,token})



    }catch (error) {
        console.log(`captain controller error: ${error}`)
        return res.status(500).json({message:'server error',error})
    }
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    const captain =req.captain
    res.status(200).json({captain})
}

module.exports.logoutCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers?.authorization?.split(' ')[1]
    
    await blacklistTokenModel.create({token})

    res.clearCookie('token');
    res.status(200).json({message:'logout successfully'})
}