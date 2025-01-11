    import express from 'express'
    import dotenv from 'dotenv'
    import userRoute from './routes/user.js'
    import bodyParser from 'body-parser'
    const app=express()
    dotenv.config()
    import connectDB from './db/database.js'
    connectDB()
    const PORT= process.env.PORT || 3000
    app.use(express.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/api/v1/user',userRoute)

    app.listen(PORT,()=>{
        console.log(`Server listen at port ${PORT}`)
    })