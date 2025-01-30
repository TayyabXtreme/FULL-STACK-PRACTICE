const express=require('express')
const mongose=require('mongosse')

const app=express()

const MONODB_URL="mongodb+srv://tayyabxtrem:123123123@cluster0.rdysk.mongodb.net"




app.use(express.json())
app.use(express.urlencoded({extended:true}))


// userdefined
// system
// library defined


app.get('/',(req,res)=>{
    //200
    //400 user ki galti
    //500 server ki galti
    //responsre user ko hamshay json mai 

    
    res.status(400).json(req.body)

    
    
})
//data user ko dayna

app.post('/',(req,res)=>{
    res.send('post api')
})
//jap user sa koi important data layna


app.put('/',(req,res)=>{
    res.send('put api')
})
//update karna

app.delete('/',(req,res)=>{
    res.send('delete api')
})
//delete karna

app.patch('/',(req,res)=>{
    res.send('patch api')
})

//jab small update


//REST API

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})
