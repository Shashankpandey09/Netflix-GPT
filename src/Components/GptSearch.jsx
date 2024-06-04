import BrowseHeader from "./BrowseHeader"
import GptMovies from "./GptMovies"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
     
        <GptSearchBar/>
        <GptMovies/>
    </div>
  )
}
export default GptSearch