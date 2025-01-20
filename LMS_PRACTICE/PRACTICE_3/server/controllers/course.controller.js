import { Course } from "../models/course.model.js"

export const createCorse=async(req,res)=>{
    try {

       const {courseTitle,category}=req.body
       if(!courseTitle || !category){
            return res.status(400).json({
                success:false,
                message:'Course title and category is requried.'
            })
       }

       

       const course=await Course.create({courseTitle,category,creator:req.id})

       return res.status(201).json({
        success:true,
        message:'Course created successfully',
        course 
       })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to create course'
        })
    }
}

export const getCreatorCourses=async(req,res)=>{
    try {
        const userId=req.id
        const courses=await Course.find({creator:userId})
        if(!courses){
            res.status(404).json({
                courses:[],
                success:false,
                message:'course not found'
            })
        }

        return res.status(200).json({
            courses,
            success:true,
            message:'course fetch successfully'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to fetch course'
        })
        
    }
}