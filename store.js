import {configureStore} from '@reduxjs/toolkit';
import userReducer from './src/utils/userSlice'
import movieReducer from './src/utils/MovieSlice'
import TrailerReducer from './src/utils/TrailerSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
      movies:movieReducer,
      trailer:TrailerReducer
    }
});
export default store;