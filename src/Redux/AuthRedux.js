
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("authUser")) || null,
    token: localStorage.getItem("authToken") || null,
  };


const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setUserToken : (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        clearUserToken : (state,action) => {
            state.user = null;
            state.token = null;
        },
    }
})

export const {setUserToken,clearUserToken} = authSlice.actions;

export default authSlice.reducer;

