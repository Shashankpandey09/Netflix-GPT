import { useEffect } from "react"
import Browse from "./Browse"
import Login from "./Login"
import { BrowserRouter,Routes,Route,} from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"

const Body = () => {


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