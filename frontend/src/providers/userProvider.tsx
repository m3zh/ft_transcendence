import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userProvider',
    initialState: {
        token: '',
        user: {},
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            sessionStorage.setItem('token', state.token);
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        setCurrentUser: (state, action) => {
            state.user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(state.user));
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
