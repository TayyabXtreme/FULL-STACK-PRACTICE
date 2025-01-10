const dotenv=require('dotenv')
const express=require('express')
dotenv.config()
const app=express()
const connectedToDB=require('./config/db')
const router=require('./routes/auth.routes')
const cookieParser=require('cookie-parser');

connectedToDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/auth',router)


app.listen(process.env.PORT,()=>{
    console.log("Connected to Port 3000")
})