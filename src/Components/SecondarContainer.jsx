import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondarContainer = () => {
  const {data}=useSelector((store)=>store.movies)
 
  return (
    <div className=" -mt-60 bg-transparent  " >
    <MovieList title={"Now Playing"}  movies={data.slice(0,20)}/>
    <MovieList  title={"Trending"} movies={data.slice(20,40)}/>
    <MovieList title={"Popular"} movies={data.slice(40,60)}/>
    <MovieList  title={"Viewer Choice"} movies={data.slice(60,80)}/>
    <MovieList  title={"Upcoming"} movies={data.slice(80,100)}/>
    </div>
  )
}
export default SecondarContainer