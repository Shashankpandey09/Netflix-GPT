import {configureStore} from '@reduxjs/toolkit';
import userReducer from './src/utils/userSlice'
const store=configureStore({
    reducer:{
      user:userReducer,
    }
});
export default store;