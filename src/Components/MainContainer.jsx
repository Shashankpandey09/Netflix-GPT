import { useSelector } from "react-redux"
import VedioTitle from "./VedioTitle";
import VedioBg from "./VedioBg";


const MainContainer = () => {

   const movies=useSelector((store)=>store.movies?.data) ;
   if(movies==null) return;

   const random=Math.floor(Math.random()*(movies&&movies.length))+1
  
  const {title}=movies.length>0&&movies[random]
  return (
    <div className="w-[100vw]" ><VedioTitle title={title} />
    <VedioBg title={title} />
    </div>
  )
}
export default MainContainer