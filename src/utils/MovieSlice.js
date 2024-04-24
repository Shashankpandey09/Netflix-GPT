import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { API_OPTIONS } from '../utils/Constants';
import axios from 'axios';
const initialState={
    data:[],
    loading:null,
    message:''
}
export const getMovieData=createAsyncThunk("fetch/MovieData",async()=>{
   
        try {
          const response = await axios.request(API_OPTIONS);
          console.log(response.data);
          return response.data
        } catch (error) {
          console.error(error);
          return error.response;
        }
    
})


export const movieSlice=createSlice({
    name:'movie',
    initialState:initialState,
    reducers:{
   
    },
    extraReducers:(builder)=>{
        builder.addCase( getMovieData.pending,(state)=>{
            state.loading=true;
        })
        .addCase(getMovieData.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(getMovieData.rejected,(state,action)=>{
            state.message=action.payload
        })
    }
})

export default movieSlice.reducer