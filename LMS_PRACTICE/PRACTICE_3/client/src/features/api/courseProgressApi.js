import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const COURSE_PROGRESS_API='http://localhost:8080/api/v1/progress'
export const courseProgressApi=createApi({
    reducerPath:'courseProgressApi',
    baseQuery:fetchBaseQuery({
        baseUrl:COURSE_PROGRESS_API,
        credentials:'include'
    }),
    endpoints:(builder)=>({
        getCourseProgress:builder.query({
            query:(courseId)=>({
                url:`${courseId}`,
                method:'GET'
            })
        }),
        updateLectureProgress:builder.mutation({
            query:({courseId,lectureId})=>({
                url:`${courseId}/lectures/${lectureId}`,
                method:'POST'
            })
        }),
        completeCourse:builder.mutation({
            query:(courseId)=>({
                url:`${courseId}/complete`,
                method:'POST'
            })
        }),
        inCompleteCourse:builder.mutation({
            query:(courseId)=>({
                url:`${courseId}/incomplete`,
                method:'POST'
            })
        })
    })
})


export const {useCompleteCourseMutation,useInCompleteCourseMutation,useGetCourseProgressQuery,useUpdateLectureProgressMutation}=courseProgressApi