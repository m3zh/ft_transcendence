import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userProvider";

export const store = configureStore({
    reducer: {
        userProvider: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>