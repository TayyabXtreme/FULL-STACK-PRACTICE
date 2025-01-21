import mongoose from "mongoose"
import { Course } from "../models/course.model.js"
import { Lecture } from "../models/lecture.model.js"
import {deleteMediaFromCloudinary, deleteVideoFromCloudinary, uploadMedia} from '../utils/cloudinary.js'
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
            return res.status(404).json({
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

export const editCourse=async(req,res)=>{
    try {
        const courseId=req.params.courseId
        const {courseTitle,subTitle,description,category,courseLevel,coursePrice}=req.body
        const thumbnail=req.file
        if (
            !courseTitle ||
            !subTitle ||
            !description ||
            !category ||
            !courseLevel ||
            !coursePrice
          ) {
            return res.status(400).json({
              success: false,
              message: "All fields are required. Please fill out all fields.",
            });
          }
        let course=await Course.findById(courseId)
        if(!course){
            return res.status(404).json({
                courses:[],
                success:false,
                message:'course not found'
            })

        }
        let courseThumbnail;
        if(thumbnail){
            if(course.courseThumbnail){
                const publicId=course.courseThumbnail.split('/').pop().split('.')[0]
                await deleteMediaFromCloudinary(publicId)

            }
            courseThumbnail=await uploadMedia(thumbnail.path)
        }


        
        const updatedData={courseTitle,subTitle,description,category,courseLevel,coursePrice,courseThumbnail:courseThumbnail?.secure_url}
        course=await Course.findByIdAndUpdate(courseId,updatedData,{new:true})

        return res.status(200).json({
            course,
            success:true,
            message:'course updated successfully'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to edit course'
        })
        
    }
}

export const getCourseById=async(req,res)=>{
    try {
        const {courseId}=req.params
        const course=await Course.findById(courseId)
        if(!course){
            return res.status(404).json({
                courses:[],
                success:false,
                message:'course not found'
            })

        }
        return res.status(200).json({
            success:true,
            message:'course fetch successfully',
            course
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to get course by id'
        })
        
    }
}


export const createLecture=async(req,res)=>{
    try {
        const {lectureTitle}=req.body
        const {courseId}=req.params

        if(!lectureTitle || !courseId){
            return res.status(400).json({
                success:false,
                message:'Lecture title is requried'
            })

        }
        const course=await Course.findById(courseId)
        if(!course){
            return res.status(400).json({
                success:false,
                message:'course doesnot exist'
            })
        }
        const lecture=await Lecture.create({lectureTitle})

        

        if(course){
            course.lectures.push(lecture._id)
            await course.save()
        }

        return res.status(201).json({
            success:true,
            message:'lecture created successfully',
            lecture
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to create lecture'
        })
    }
}


export const getCourseLecture=async(req,res)=>{
    try {
        const {courseId}=req.params
        const course=await Course.findById(courseId).populate('lectures');
        if(!course){
            return res.status(404).json({
                message:'Corse not found',
                success:false
            })
        }

        return res.status(200).json({
            lecture:course.lectures,
            success:true,
            message:'lecture fetch successfully'
        })


        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to fetch lecture'
        })
        
    }
}

export const editLecture=async(req,res)=>{
    try {

        const {lectureTitle,isPreviewFree,videoInfo}=req.body
        console.log(isPreviewFree)
        const {courseId,lectureId}=req.params

        if (!mongoose.Types.ObjectId.isValid(courseId) || !mongoose.Types.ObjectId.isValid(lectureId)) {
            return res.status(400).json({
              success: false,
              message: 'Invalid courseId or lectureId',
            });
          }

        
        const lecture=await Lecture.findById(lectureId)
        if(!lecture){
            return res.status(404).json({
                success:false,
                message:'lecture not found'
            })

        }
        if(lectureTitle) lecture.lectureTitle=lectureTitle;

        if(videoInfo?.videoUrl) lecture.videoUrl=videoInfo.videoUrl;

        if(videoInfo?.publicId) lecture.publicId=videoInfo.publicId;

        if (typeof isPreviewFree === 'boolean') {
            lecture.isPreviewFree = isPreviewFree;
        }

        await lecture.save()

        const course=await Course.findById(courseId)
        if(course && !course.lectures.includes(lecture._id)){
            course.lectures.push(lecture._id)
            await course.save()
        }

        return res.status(200).json({
            success:true,
            message:'lecture updated successfully',
            lecture
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to edit lecture'
        })
    }
}

export const removeLecture=async(req,res)=>{
    try {

        const {lectureId}=req.params
        const lecture=await Lecture.findByIdAndDelete(lectureId);
        if(!lecture){
            return res.status(404).json({
                success:false,
                message:'lecture not found'
            })
        }

        if(lecture.publicId){
            await deleteVideoFromCloudinary(lecture.publicId)
        }

        //
        await Course.updateOne({lectures:lectureId},{$pull:{lectures:lectureId}})


        return res.status(200).json({
            message:'Lecture remove successfully',
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to remove lecture'
        })
    }
}


export const getLectureById=async(req,res)=>{
    try {
        const {lectureId}=req.params
        const lecture=await Lecture.findById(lectureId);
        if(!lecture){
            return res.status(404).json({
                success:false,
                message:'lecture not found'
            })
        }
        return res.status(200).json({
            lecture,
            success:true,
            message:'Lecture fetch successfully'
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to get lecture'
        })
    }
}


export const togglePublishCourse=async(req,res)=>{
    try {
        const {courseId}=req.params
        const {publish}=req.query;
        const course=await Course.findById(courseId)

        if(!course){
            return res.status(404).json({
                message:'Course not found',
                success:false
            })
        }

        course.isPublished=publish ==='true';
        await course.save()

        const statusMessage=course.isPublished ? 'Published' :'UnPublished'

        return res.status(200).json({
            message:`Course is ${statusMessage}`,
            success:true,

        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'failed to update status'
        })
    }
}


export const deleteCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
  
      // Find the course by ID
      const course = await Course.findById(courseId);
      if (!course) {
        return res.status(404).json({
          success: false,
          message: 'Course not found',
        });
      }
  
      // Get all lecture IDs associated with the course
      const lectureIds = course.lectures;
  
      if (lectureIds.length > 0) {
        // Fetch all lectures in a single query
        const lectures = await Lecture.find({ _id: { $in: lectureIds } });
  
        // Extract all public IDs of videos for deletion
        const publicIds = lectures
          .filter((lecture) => lecture.publicId)
          .map((lecture) => lecture.publicId);
  
        // Delete all videos from Cloudinary in a single batch
        if (publicIds.length > 0) {
          await Promise.all(
            publicIds.map((publicId) => deleteVideoFromCloudinary(publicId))
          );
        }
  
        // Delete all lectures in a single query
        await Lecture.deleteMany({ _id: { $in: lectureIds } });
      }
  
      // Delete the course
      await Course.findByIdAndDelete(courseId);
  
      return res.status(200).json({
        success: true,
        message: 'Course and all its lectures have been deleted successfully',
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Failed to delete the course',
      });
    }
  };


  export const getPublishedCourse=async(req,res)=>{
    try {
        const courses=await Course.find({isPublished:true}).populate({path:'creator',select:'name photoUrl'})
        if(!courses){
            return res.status(404).json({
                message:'Course not found'
            })
        }

        return res.status(200).json({
            courses,
            success:true,
            message:'course fetch successfully'
        })
        
    } catch (error) {
        console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Failed to get published courses',
      });
        
    }
  }