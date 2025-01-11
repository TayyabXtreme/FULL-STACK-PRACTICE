import { User } from "../models/user.js"
import bcrypt from 'bcrypt'

export const register=async(req,res)=>{
    try {
        const {fullName,email,password}=req.body
        if(!fullName || !email || !password){
            return res.status(403).json({
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