import {createSlice} from "@reduxjs/toolkit";
export const userSlice=createSlice({
    name:'user',
    initialState:null||localStorage.getItem("status"),
    reducers:{
        addUser:(state,action)=>{
            localStorage.setItem("status",`${action.payload}`)
        return action.payload;
        //whatever you return becomes the state
        },
        removeUser:(state,action)=>{
            localStorage.removeItem("status");
            return null;
        }
    }
})

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer