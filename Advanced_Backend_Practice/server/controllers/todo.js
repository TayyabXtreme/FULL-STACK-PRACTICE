import { Todo } from "../models/todo.js"

export const createTodo=async(req,res)=>{
    try {
        const {title,description}=req.body
        if(!title || !description){
            return res.status(403).json({
                success:false,
                message:"All fileds are required"
            })
        }
        const todo=new Todo({title,description})
        todo.save()

        return res.status(201).json({
            success:true,
            message:"todo created",
            todo

        })


    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"some thing wrong"
        })
    }
}

export const getTodo = async (req,res)=>{
    try {
        const todos=await Todo.find();
        
        return res.status(200).json({
            success:true,
            todos
        })
        
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"some thing wrong"
        })
        
    }
}

export const updateTodo=async(req,res)=>{
    try {
        const _id=req.params.todoId;
        const {title}=req.body
        if(!title){
            return res.status(403).json({
                success:false,
                message:"All fileds are required"
            })
        }
        const todo=await Todo.findByIdAndUpdate(_id,{title},{new:true})
        await todo.save()
        return res.status(200).json({
            success:true, 
            message:"Todo updated",
            todo
        })

        
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"some thing wrong"
        })
        
    }
}

export const deleteTodo=async (req,res)=>{
    try {
        const _id=req.params.todoId;
        const todo=await Todo.findByIdAndDelete(_id)
        if(!todo){
            return res.status(403).json({
                success:false,
                message:"This Todo does not exist"
            })
        }
        return res.status(200).json({
            success:true,
            message:"todo deleted",
            todo
        })

        
    } catch (error) {
        console.log(error)
        return res.status(403).json({
            success:false,
            message:"some thing wrong"
        })
    }
}