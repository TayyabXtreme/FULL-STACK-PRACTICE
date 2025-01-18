import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils/generateToken.js'
import { deleteMediaFromCloudinary, uploadMedia } from '../utils/cloudinary.js'
export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All the fields are required."
            })
        }

        const user=await User.findOne({email})
        if(user){
            return res.status(400).json({
                success:false,
                message:'user already exist with this email'
            })
        }

        const hasedPassword=await bcrypt.hash(password,10)

        await User.create({
            name,email,password:hasedPassword
        })

        return res.status(201).json({
            success:true,
            message:'Account created successfully'
        })



        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to register'
        })

    }
}


export const login=async(req,res)=>{
    try {
        const {email,password}=req.body

        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All the fields are required."
            })
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:'email or password is invalid'
            })
        }

        const checkedPassword=await bcrypt.compare(password,user.password)
        if(!checkedPassword){
            return res.status(400).json({
                success:false,
                message:'email or password is invalid'
            })

        }

        generateToken(res,user,`Welcome back ${user.name}`)

        


        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to register'
        })

        
    }
}

export const logout=async(_,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            success:true,
            message:'logout successfully'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to logout'
        })
    }
}

export const getUserProfile=async(req,res)=>{
    try {
        const userId=req.id
        const user=await User.findById(userId).select("-password")
        if(!user){
            return res.status(404).json({
                success:false,
                message:'Profile not found'
            })
        }

        return res.status(200).json({
            success:true,
            user
        })

        
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success:false,
            message:'failed to get user'
        })
    }
}

export const updateProfile=async(req,res)=>{
    try {
        const userId=req.id;
        const name="tayyab";
        const profilePhoto=req.file;
        console.log(profilePhoto)
        if(!profilePhoto || !name  ){
            return res.status(400).json({
                success:false,
                message:'pls provide user name and photo'
            })
        }
        const user=await User.findById(userId)
        if(!user){
            return res.status(404).json({
                success:false,
                message:'Profile not found'
            })

        }
        //
        if(user.photoUrl){
            const publicId=user.photoUrl.split('/').pop().split('.')[0];//extract public id
            deleteMediaFromCloudinary(publicId)
        }

        const cloudResponse=await uploadMedia(profilePhoto.path)
        const  photoUrl=cloudResponse.secure_url

        const updatedData={name,photoUrl}
        const updatedUser=await User.findByIdAndUpdate(userId,updatedData,{
            new: true
        }).select('-password')

        return res.status(200).json(
            {
                success:true,
                message:'user updated successfully',
                user:updatedUser
            }

        )
        
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success:false,
            message:'failed to get user'
        })
        
    }
}