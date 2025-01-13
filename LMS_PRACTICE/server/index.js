import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.routes.js'
import cors from 'cors'
dotenv.config();
const app=express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

import monoDBConnect from './database/db.js';

monoDBConnect()

app.use('/api/v1/user',userRoute)
app.get('/home',(_req,res)=>{
    res.status(200).json({
        success:true,
        message:'Hello i am comming from backend'
    })
})






app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})