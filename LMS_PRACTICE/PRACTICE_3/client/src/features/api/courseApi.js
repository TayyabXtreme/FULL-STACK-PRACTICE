import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const COURSE_API = 'http://localhost:8080/api/v1/course'
export const courseApi = createApi({
    reducerPath: 'courseApi',
    tagTypes:['Refatch_Creator_Course','Refatch_Lecture'],
    baseQuery: fetchBaseQuery({
        baseUrl: COURSE_API,
        credentials: 'include'
    }),
    endpoints: (builder) => ({
        createCourse: builder.mutation({
            query: ({ courseTitle, category }) => ({
                url: '',
                method: 'POST',
                body: { courseTitle, category }

            }),
           invalidatesTags :['Refatch_Creator_Course']
        }),
        getPublishedCourse:builder.query({
            query:()=>({
                url:'/published-courses',
                method:'GET'
            })
        }),
        getCreatorCourse: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
                

            }),
            providesTags:['Refatch_Creator_Course']
        }),
        editCourse:builder.mutation({
            query:({formData,courseId})=>({
                url:`/${courseId}`,
                method:'PUT',
                body:formData
            }),
            invalidatesTags :['Refatch_Creator_Course']
        }),
        getCourseById:builder.query({
            query:(courseId)=>({
                url:`/${courseId}`,
                method:'GET'
            })
        }),
        createLecture:builder.mutation({
            query:({lectureTitle,courseId})=>({
                url:`/${courseId}/lecture`,
                method:'POST',
                body:{lectureTitle}
            })
        }),
        getCourseLectures:builder.query({
            query:(courseId)=>({
                url:`/${courseId}/lecture`,
                method:'GET',
            
            }),
            providesTags:['Refatch_Lecture']
        }),
        editLecture:builder.mutation({
            query:({lectureTitle,videoInfo,isPreviewFree,courseId,lectureId})=>({
                url:`/${courseId}/lecture/${lectureId}`,
                method:'PUT',
                body:{lectureTitle,videoInfo,isPreviewFree}
            }),
            invalidatesTags:['Refatch_Lecture']
        }),
        removeLecture:builder.mutation({
            query:(lectureId)=>({
                url:`/lecture/${lectureId}`,
                method:'DELETE',
                
            }),
            invalidatesTags:['Refatch_Lecture']
        }),
        getLectureById:builder.query({
            query:(lectureId)=>({
                url:`/lecture/${lectureId}`,
                method:'GET'
            }),
            providesTags:['Refatch_Lecture']
        }),
        publishedCourse:builder.mutation({
            query:({courseId,query})=>({
                url:`/${courseId}?publish=${query}`,
                method:'PATCH'
            }),
            invalidatesTags :['Refatch_Creator_Course']
        }),
        deleteCourse:builder.mutation({
            query:(courseId)=>({
                url:`/${courseId}`,
                method:'DELETE'
            }),
            invalidatesTags :['Refatch_Creator_Course']

        })
    })
})

export const { useGetPublishedCourseQuery,useDeleteCourseMutation,usePublishedCourseMutation,useGetLectureByIdQuery,useRemoveLectureMutation,useCreateCourseMutation ,useGetCreatorCourseQuery, useEditCourseMutation,useGetCourseByIdQuery,useCreateLectureMutation,useGetCourseLecturesQuery,useEditLectureMutation} = courseApi