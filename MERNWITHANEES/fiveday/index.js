const express=require('express')
const dotenv=require('dotenv')
const { default: mongoose } = require('mongoose')
const { aboutrouter } = require('./routes/aboutroute')
const mongooseDB = require('./database/db')
const registerUser = require('./controller/authenticationController')
dotenv.config({})
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/register',(req,res)=>{
    registerUser(req,res)
})



mongooseDB()

const port=process.env.PORT
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})