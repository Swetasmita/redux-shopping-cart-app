/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

//we are calling createSlice method and provide an object with arguments
 const authSlice = createSlice({
    name:'auth',
    initialState: {isLoggedIn: false},
    //add two functions inside a reducers: login and logout
    reducers: {
        login(state){
          state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
});
export const authActions = authSlice.actions;

export default authSlice;