import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const USER_API='http://localhost:8000/api/v1/user/'
export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    endpoints:(builder)=>{
        registerUser:builder.mutation({
            query:(inputData)=>({
                url:'register',
                method:'POST',
                body:inputData
            })
        }),
        loginUser: builder.mutation({
            query:(inputData)=>({
                url:'register',
                method:'POST',
                body:inputData
            })
        })
    }
})