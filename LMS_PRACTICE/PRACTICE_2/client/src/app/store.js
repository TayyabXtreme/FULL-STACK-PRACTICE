import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "@/features/api/authApi";
export const store=configureStore({
    reducer:rootReducer,
    middleware:(defaultMiddleWare)=>defaultMiddleWare().concat(authApi.middleware)
})