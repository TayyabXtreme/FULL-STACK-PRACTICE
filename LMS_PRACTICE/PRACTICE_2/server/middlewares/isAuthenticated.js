import jwt from 'jsonwebtoken'

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'user not authenticated'
            })
        }
        const decode = await jwt.verify(token, process.env.SECRET_KEY)
        if (!decode) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            })
        }
        req.id = decode.userId
        next()


    } catch (error) {
        console.log(error)

    }
}

export default isAuthenticated