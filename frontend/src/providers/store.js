import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userProvider.js";

export default configureStore({
    reducer: {
        userProvider: userReducer,
    },
})
