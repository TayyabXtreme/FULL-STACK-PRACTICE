import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'
const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'user not authenticared'
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: 'invalid token'
            })
        }

        
        const userExist=await User.findById(decode.userId)
               if(!userExist){
                return res.status(401).json({
                    success: false,
                    message: 'user not exist'
                })
               }
               req.id = decode.userId

        next()

    } catch (error) {
        console.log(error)

    }
}
export default isAuthenticated