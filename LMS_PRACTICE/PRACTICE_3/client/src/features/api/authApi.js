import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { userLoggedIn } from '../authSlice'

const USER_API='http://localhost:8080/api/v1/user/'

export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({
        baseUrl:USER_API,
        credentials:'include'
    }),
    endpoints:(builder)=>({
        registerUser:builder.mutation({
            query:(inputData)=>({
                url:'register',
                method:'POST',
                body:inputData
            })
        }),
        loginUser:builder.mutation({
            query:(inputData)=>({
                url:'login',
                method:'POST',
                body:inputData
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const response=await queryFulfilled
                    dispatch(userLoggedIn({user:response.data.user}))
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    })
})

export const {useRegisterUserMutation,useLoginUserMutation}=authApi

