import { createSlice } from "@reduxjs/toolkit"


const initialState={
    user:null,
    isAuthenticated:false
}

const authSlice=createSlice ({
    name:'authSlice',
    initialState,
    reducers:{
        userLoggedIn:(state,action)=>{
            state.user=action.payload.user
            state.isAuthenticated=true
        },
        userLogout:(state,action)=>{
            state.user=null,
            state.isAuthenticated=false
        }
    }

})

export const {userLoggedIn,userLogout}=authSlice.actions

export default authSlice.reducer