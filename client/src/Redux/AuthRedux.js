


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        email : JSON.parse(localStorage.getItem('authEmail')) || null,
        token : JSON.parse(localStorage.getItem('authToken'))  ||  null,
    },
    reducers : {
        setUser : (state,action) => {
          state.email = action.payload.email;
          state.token = action.payload.token
        },

        clearUser: (state,action) => {
            state.email = null;
            state.token = null;
        },

    }


})


export const {setUser,clearUser} = authSlice.actions;

export default authSlice.reducer;