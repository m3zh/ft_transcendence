import { createSlice } from '@reduxjs/toolkit'
import jsCookie from "js-cookie";

export const userSlice = createSlice({
    name: 'userProvider',
    initialState: {
        token: '',
        user: {},
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            jsCookie.getToken('jwt_token')
                .then(res => {
                    dispatchEvent(setCurrentUser(res.data))

                })
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        setCurrentUser: (state, action) => {
            state.user = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken, setCurrentUser } = userSlice.actions

export default userSlice.reducer
