import dotenv from 'dotenv'
dotenv.config({})
import express from 'express'
import { ConnectDB } from './Database/db.js'
import userRouter from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import courseRoute from './routes/course.routes.js'
import mediaRoute from './routes/media.routes.js'
import purchaseRoute from './routes/purchased.course.routes.js'
import courseProgressRoute from './routes/course.progress.routes.js'
import cors from 'cors'

const app=express()

const PORT=process.env.PORT

ConnectDB()
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true

}))
app.use('/api/v1/media',mediaRoute)
app.use('/api/v1/user',userRouter)
app.use('/api/v1/course',courseRoute)
app.use('/api/v1/purchase',purchaseRoute)
app.use('/api/v1/progress',courseProgressRoute)


app.listen(PORT,()=>{
    console.log(`SERVER IS LISTINING AT PORT ${PORT}`)
})