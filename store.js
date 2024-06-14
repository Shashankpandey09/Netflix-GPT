import {configureStore} from '@reduxjs/toolkit';
import userReducer from './src/utils/userSlice'
import movieReducer from './src/utils/MovieSlice'
import TrailerReducer from './src/utils/TrailerSlice'
import gptReducer from './src/utils/GptSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
      movies:movieReducer,
      trailer:TrailerReducer,
      gpt:gptReducer
    }
});
export default store;