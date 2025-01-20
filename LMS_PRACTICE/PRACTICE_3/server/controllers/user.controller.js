import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js"
export const registerUser=async(req,res)=>{

    try {

        const {name,email,password}=req.body
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:'please provide all the fileds'
            })
        }

        const user = await User.findOne({
            $or: [
            { name: name },
            { email: email }
            ]
        });
        if(user){
            return res.status(400).json({
            success:false,
            message:'User already exists'
            })
        }

        const hasedPassword=await bcrypt.hash(password,10)


        const newUser = new User({name, email, password:hasedPassword});
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: newUser
        });
        

        
    } catch (error) {
        console.log(error)
       return res.status(500).json({
            success:false,
            message:'failed to register'
        })
    }



}


export const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body
        if( !email || !password){
            return res.status(400).json({
                success:false,
                message:'please provide all the fileds'
            })
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
            success:false,
            message:'Invalid email or password'
            })
        }

        const checkedPassword=await bcrypt.compare(password,user.password)

        if(!checkedPassword){
            return res.status(400).json({
            success:false,
            message:'Invalid email or password'
            })
        }

        generateToken(res,user,`Welcom back ${user.name}`)


        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             success:false,
             message:'failed to register'
         })
        
    }
}


export const logout=async(req,res)=>{
    try {
        return res.status(200).cookie('token','',{maxAge:0}).json({
            message:'logout successfully',
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to logout'
        })

    }
}

export const getUSerProfile=async(req,res)=>{
    try {

        const userId=req.id
        const user=await User.findById(userId).select('-password')
        if(!user){
            return res.status(404).json({
                message:'Profile not found',
                success:false
            })
        }

        return res.status(200).json(
            {
                success:true,
                user
            }
        )



        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to load User'
        })
    }
}