import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
const Body = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      } else {
      dispatch(removeUser());
      }
    });
  },[])
  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route path="/Browse" element={<Browse/>} />  
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default Body