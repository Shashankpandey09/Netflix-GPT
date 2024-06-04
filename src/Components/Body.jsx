import Browse from "./Browse"
import GptSearch from "./GptSearch"
import Login from "./Login"
import { BrowserRouter,Routes,Route,} from "react-router-dom"

const Body = () => {


  return (
    <div>
    <BrowserRouter>
    <Routes>
     <Route exact path="/" element={<Login/>}/>
     <Route path="/Browse" element={<Browse/>} />  
     <Route path="/Gpt"  element={<GptSearch/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default Body