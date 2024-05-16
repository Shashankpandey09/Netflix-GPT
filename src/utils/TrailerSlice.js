import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    trailer:null,
    loading:false,
    msg:" "
}
export const getTrailer=createAsyncThunk('get/trailer',async(title)=>{
      console.log(title)
    const options = {
        method: 'GET',
        url: 'https://youtube-v3-alternative.p.rapidapi.com/search',
        params: {
          query:`${title}`,
          geo: 'US',
          lang: 'en'
        },
        headers: {
          'x-rapidapi-key': 'f1545c9d18msh9b0673556ff7e32p1f5812jsn2d021e0cb064',
          'x-rapidapi-host': 'youtube-v3-alternative.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
      };
      
      try {
          const response = await axios.request(options);
      
          return response.data
       
      } catch (error) {
          
          return error
      }
})

export const trailerSlice=createSlice({
    name:'trailer',
    initialState:initialState,
    reducers:{
   
    },
    extraReducers:(builder)=>{
        builder.addCase( getTrailer.pending,(state)=>{
            state.loading=true;
        })
        .addCase(getTrailer.fulfilled,(state,action)=>{
            state.trailer=action.payload.data[0];
            state.loading=false;
    
        })
        .addCase(getTrailer.rejected,(state,action)=>{
            state.message=action.payload
            state.loading=false;
        })
    }
})

export default trailerSlice.reducer