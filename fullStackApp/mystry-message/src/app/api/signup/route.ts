
import dbConnect from "@/lib/dbconnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificaitonEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request: Request) {
    await dbConnect();
try {

    const {username,email,password}=await request.json();
    const existingUserVerifiedByUsername=await UserModel.findOne({username,isVerified:true})

    if(existingUserVerifiedByUsername){
        return Response.json({success:false,message:"Username already exists"},{status:400})
    }

    const existingUserByEmail = await UserModel.findOne({email})
    const verifyCode=Math.floor(100000+Math.random()*900000).toString()

    if(existingUserByEmail){
        if(existingUserByEmail.isVerified){
            return Response.json({success:false,message:"Email already exists"},{status:400})
        }
        else{
            const hasedPassword=await bcrypt.hash(password,10)
            existingUserByEmail.password=hasedPassword;
            existingUserByEmail.verifyCode=verifyCode;
            existingUserByEmail.verifyCodeExpiry=new Date(Date.now()+3600000)
            await existingUserByEmail.save()
            
        }
    }else{
        const hasedPassword=await bcrypt.hash(password,10)
        const expiryDate=new Date()
        expiryDate.setHours(expiryDate.getHours()+1)

        const newUser=new UserModel({
            username,
            email,
            password:hasedPassword,
            verifyCode,
            verifyCodeExpiry:expiryDate,
            isVerified:false,
            isAcceptingMessages:true,
            messages:[]
        })

        await newUser.save()

    }
    const emailResponse=await sendVerificaitonEmail(email,verifyCode,verifyCode)

    if(!emailResponse.success){
        return Response.json({success:false,message:emailResponse.message},{status:500})
    }

    return Response.json({success:true,message:"User registered successfully,Please verify Your email"},{status:200})



    
} catch (error) {
    console.error("Error Registering User",error)
    return Response.json({success:false,message:"Failed to register user"},{status:500})
}


}