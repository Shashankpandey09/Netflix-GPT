import { createSlice } from "@reduxjs/toolkit";
const initialState={lang:"en"};
export const gptSlice=createSlice({
    name:"gpt",
    initialState:initialState,
    reducers:{
     changeLang:(state,action)=>{
        state.lang=action.payload;
     }
    }

});
export const{changeLang}=gptSlice.actions;
export default gptSlice.reducer;
