import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/db.js'
import UserRouter from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config({})

const app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/v1/user',UserRouter)


app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))



connectDB()
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is listining at port ${PORT}`)
})

