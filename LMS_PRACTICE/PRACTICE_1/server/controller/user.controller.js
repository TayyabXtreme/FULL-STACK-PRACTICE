import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js"

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:'All filds are required'
            })
        }
        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                success:false,
                message:'this email is already exist'
            })
        }

        const hasedPassword=await bcrypt.hash(password,10)


        await User.create({
            name,email,password:hasedPassword
        })

        return res.status(201).json({
            success:true,
            message:'Account created successfully.'
        })

    }catch(error){
        console.log('SOME WENT WRONG IN SERVER',error)
        return res.status(500).json({
            success:false,
            message:'Failed to Register'
        })

    }
}


export const login=async(req,res)=>{

    try {
        const {email,password}=req.body

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:'All filds are required'
            })
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:'Incorrect email or password'
            })
        }

        const isPasswordMatch=await bcrypt.compare(password,user.password)

        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:'Incorrect email or password'
            })
        }

        await generateToken(res,user,`Welcome back,${user.name}`)

        



        
        
    } catch (error) {
        console.log('SOME WENT WRONG IN SERVER',error)
        return res.status(500).json({
            success:false,
            message:'Failed to Register'
        })

    }
}