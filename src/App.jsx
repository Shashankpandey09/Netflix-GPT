
import {Provider} from "react-redux"
import store from "../store"
import Body from './Components/Body'
function App() {


  return (
    <>
    <Provider store={store}>
    <Body/>
  </Provider>
    </>
  )
}

export default App
