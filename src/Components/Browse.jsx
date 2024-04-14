
import BrowseHeader from "./BrowseHeader"
import {auth} from '../utils/firebase'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { useSelector } from 'react-redux';

const Browse = () => {
  const navigate=  useNavigate();
  const user = useSelector((store) => store.user);
  useEffect(()=>{
    if(user==null){
      console.log(auth.currentUser)
      navigate('/');
      }
  },[user])
  

  return (
    <div >
      <BrowseHeader/>
    </div>
  )
}
export default Browse