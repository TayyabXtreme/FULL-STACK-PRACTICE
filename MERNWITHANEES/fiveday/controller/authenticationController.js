const userModel = require("../models/usermodel")
const bcrypt=require('bcryptjs')

const registerUser=async(req,res)=>{
    const {username,password,email}=req.body
    try {
        
    
  
  if(!username || !password || !email){
    console.log('pls provide all the fileds')
    return res.status(400).json({
        success:false,
        message:'pls provide all the fileds'
    })
  }

  const findUser=await userModel.findOne({usernamemd:username})
  if(findUser){
    console.log('this name is already taken')
    return res.status(400).json({
        success:false,
        message:'this name is already taken'
    })
  }
  const hasedPassword=await bcrypt.hash(password,10)

  const user=await userModel.create({usernamemd:username,emailmd:email,passwordmd:hasedPassword,userId:Date.now()})
  return res.status(201).json({
    success:true,
    message:'user created successfully',
    user:user
  })
} catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'server error'
        })
}



}


module.exports=registerUser




