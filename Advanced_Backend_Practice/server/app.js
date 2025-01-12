    import express from 'express'
    import dotenv from 'dotenv'
    import userRoute from './routes/user.js'
    import bodyParser from 'body-parser'
    import todoRouter from './routes/todo.js'
    import cookieParser from 'cookie-parser'
    import cors from 'cors'
    const app=express()
    dotenv.config()
    import connectDB from './db/database.js'
    connectDB()
    const PORT= process.env.PORT || 3000
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors({
        origin:"http://localhost:5173",
        credentials:true
    }))
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/todo',todoRouter)
    
    app.listen(PORT,()=>{
        console.log(`Server listen at port ${PORT}`)
    })