const dotenv=require('dotenv')
const express=require('express')
dotenv.config()
const app=express()
const connectedToDB=require('./config/db')
const authRouter=require('./routes/auth.routes')
const cookieParser=require('cookie-parser');
const userRouter=require('./routes/user.routes')


connectedToDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/auth',authRouter)
app.use('/user',userRouter)

app.listen(process.env.PORT,()=>{
    console.log("Connected to Port 3000")
})