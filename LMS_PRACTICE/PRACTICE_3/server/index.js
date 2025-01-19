import dotenv from 'dotenv'
dotenv.config({})
import express from 'express'
import { ConnectDB } from './Database/db.js'
import userRouter from './routes/user.routes.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const app=express()

const PORT=process.env.PORT

ConnectDB()
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1/user',userRouter)

app.listen(PORT,()=>{
    console.log(`SERVER IS LISTINING AT PORT ${PORT}`)
})