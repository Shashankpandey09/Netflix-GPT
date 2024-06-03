
import { useEffect } from "react"
import { getMovieData } from "../utils/MovieSlice"
import BrowseHeader from "./BrowseHeader"
import { useDispatch } from "react-redux"
import MainContainer from "./MainContainer"
import SecondarContainer from "./SecondarContainer"



const Browse = () => {
const dispatch=useDispatch();
useEffect(()=>{
 dispatch (getMovieData());
},[])

  return (
    <div  className="w-[100vw] overflow-x-hidden whitespace-nowrap"  >
      <BrowseHeader  />
      <MainContainer/>
      <div className="bg-[#141414]"><SecondarContainer/></div>
   
    </div>
  )
}
export default Browse