import {configureStore} from '@reduxjs/toolkit';
import userReducer from './src/utils/userSlice'
import movieReducer from './src/utils/MovieSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
      movies:movieReducer
    }
});
export default store;