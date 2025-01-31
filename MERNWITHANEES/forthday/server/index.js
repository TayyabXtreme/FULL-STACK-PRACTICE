const express=require('express')
const doeenv=require('dotenv')
const cors=require('cors')
doeenv.config({})
const { MonoDBConnect } = require('./database/db')
const { getTodo, createTodo, updateTodo, deleteTodo } = require('./controller/todo')


const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=process.env.PORT || 5000

MonoDBConnect()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.get('/getTodo',(req,res)=>{
    getTodo(req,res)
})

app.post('/createTodo',(req,res)=>{
    createTodo(req,res)
})


app.put('/updateTodo',(req,res)=>{
    updateTodo(req,res)
})


app.post('/deleteTodo',(req,res)=>{
    deleteTodo(req,res)
})

app.listen(port,()=>{
    console.log(`server is listeninig at port ${port}`)
})