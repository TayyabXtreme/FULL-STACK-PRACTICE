const userModel=require('../models/user.model')
const userService=require('../services/user.service')
const { validationResult } = require('express-validator')


module.exports.registerUser=async(req,res,next)=>{
    try {
        
    
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()})
    }

    const {fullname,email,password}=req.body

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