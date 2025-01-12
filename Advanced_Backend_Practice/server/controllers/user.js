import jwt from "jsonwebtoken"
import { User } from "../models/user.js"
import bcrypt from 'bcrypt'

export const register=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body
        if(!fullName || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All the field are required"
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(403).json({
                success:false,
                message:"This email id is already registered."
            }) 
        }
        const hassedPassword= await bcrypt.hash(password,10)
        await User.create({
            fullName,email,password:hassedPassword
        })

        return res.status(201).json({
            success:true,
            message:"Accountcl created successfully"
        })



        
    } catch (error) {
        console.log(error)
    }
}

export const login=async(req,res)=>{
    try {
     
       
        const {email,password}=req.body
        if( !email || !password){
            return res.status(400).json({
                success:false,
                message:"All the field are required"
            })
        }
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            }) 
        }

        const checkPassword=await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return res.status(400).json({
                success:false,
                message:"Incorrect email or password"
            }) 
        }
        const token =await jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'1d' })

        return res.status(200).cookie("token",token,{httpOnly:true,sameSite:"strict",maxAge:24*60*60*1000}).json({
            success:true,
            message:`Welcome back ${user.fullName}`
        })


        
    } catch (error) {
        console.log(error)
    }
}

export const logout=async(_,res)=>{
    try {
        return res.status(200).cookie('token',"",{maxAge:0}).json(
            {
                success:true,
                message:"User Logout Successfully"
            }
        )
        
    } catch (error) {
            console.log(error)
    }   
}