import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./reducers/userSlice"
import postSlice from "./reducers/postSlice"

export const store = configureStore({

    reducer : {
        user : userSlice,
        post : postSlice
    }
})