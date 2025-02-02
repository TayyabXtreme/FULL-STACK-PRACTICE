const { UserModel } = require("../database/todoModel")
const mongoose=require('mongoose')

const getTodo=async(req,res)=>{
    try {

        const users=await UserModel.find()
        return res.status(200).json({
            success:true,
            message:'user fetch successfully',
            user:users
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'server error'


        })
    }

}


const createTodo=async(req,res)=>{

    const {title,description}=req.body
    if(!title || !description){
        return res.status(400).json({
            success:false,
            message:'pls fill all the require fileds'
        })
    }

    try {
        const users=await UserModel.create({titlemd:title,descriptionmd:description})
        return res.status(201).json({
            success:true,
            message:'user created successfully',
            user:users
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'server error'
        })
    }

    
}


const updateTodo=async(req,res)=>{

    const {title,description,id,isCompleted}=req.body
    if(!title || !description || !id || typeof isCompleted !== 'boolean' ){
        return  res.status(400).json({
            success:false,
            message:'pls fill all the require fileds'
        })



    }


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }

    try {

        const users=await UserModel.findByIdAndUpdate(id,{titlemd:title,descriptionmd:description,isCompletedmd:isCompleted})
        if(!users){
            return  res.status(400).json({
                success:false,
                message:'user not find'
            })

        }


        return res.status(200).json({
            success:true,
            message:'user update succesffuly',
            user:users
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'server error'
        })
        
    }
}



const deleteTodo=async(req,res)=>{
    const {id}=req.body
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid ID format',
        });
    }

    try {
        const deleteTodo=await UserModel.findByIdAndDelete(id)
    if(!deleteTodo){
        return res.status(400).json({
            success:false,
            message:'id not found'
        })
    }

    return res.status(200).json({
        success:true,
        message:'user deleted successfully',
        user:deleteTodo

    })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'server error'
        })
    }
    






}





module.exports={createTodo,getTodo,updateTodo,deleteTodo}