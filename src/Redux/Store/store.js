import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Features/Auth/AuthSlicer'

export const store =configureStore({
    reducer:{
        auth:authReducer,
    }
}) 

