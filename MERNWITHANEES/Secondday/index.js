const express = require('express')


const mongosse = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({})
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
const monodbConnect = async () => {
    try {
        await mongosse.connect(process.env.MONODB_URI)
        console.log('mongdb connect')
    } catch (error) {
        console.log(error)
    }



}

monodbConnect()

const todoSchema = mongosse.Schema({
    title: String,
    description: String,
    check: String


})

const todoModel = mongosse.model('todo', todoSchema)









app.get('/getdata', (req, res) => {

    const getData=async()=>{
       try {
        const todos= await todoModel.find()

       return res.status(200).json(todos)
        
       } catch (error) {
        console.log(error)
        
        return res.status(500).json({message:"server problem"})

       }

    }

    getData()


})

app.post('/createtodo', (req, res) => {


    const { title, description, check } = req.body
    if (!title || !description || !check) {
        return res.status(400).json({
            message: "pls fill all the filed"
        })
    }

    const createTodo = async () => {
        try {

            await todoModel.create({
                title: title,
                description: description,
                check: check
            })


            return res.status(201).json({
                succeess: true,
                message: "todo is created"
            })


        } catch (error) {
            console.log(error)
            return res.status(500).json({
                success:false,
                message:"server problme"
            })
        }

    }

    createTodo()










})

app.put('/updatetodo', (req, res) => {

    const {id,title,description}=req.body

    

    const UpdateTodo=async()=>{

        if(!id || !title || !description){
            return res.status(400).json({
                message:'pls provide the correct id'
            })
        }
        
        try {

            await todoModel.findByIdAndUpdate(id,{title:title,description:description})

            return res.status(200).json({
                success:true,
                message:'todo is update successfully'
            })




            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message:"server problem"
            })
        }
    }

    UpdateTodo()





})

app.delete('/deletetodo', (req, res) => {
    const {id}=req.body

    

    const deleteTodo=async()=>{

        if(!id){
            return res.status(400).json({
                message:'pls provide the correct id'
            })
        }
        
        try {

            await todoModel.findByIdAndDelete(id)

            return res.status(200).json({
                success:true,
                message:'todo is delete successfully'
            })




            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message:"server problem"
            })
        }
    }

    deleteTodo()



})

app.listen(process.env.PORT, () => {
    console.log("Project is start")
})
