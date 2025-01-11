import jwt from 'jsonwebtoken'

const isAuthenticated=async(req,res,next)=>{

    try{
        const token=req.cookies.token
        if(!token){
            res.status(401).json({
                success:false,
                message:"USer not authenticated"
            })
        }
        
        const decode=await jwt.verify(token,process.env.SECRET_KEY)

        if(!decode){
            res.status(401).json({
                success:false,
                message:"Invalid Token"
            })
        }

        req.id= decode.userId
        console.log(decode.userId)
        next()



    }catch(error){
        console.log(error)
    }
}

export default isAuthenticated