import Header from "./Header"
import { useState } from "react"
const Login = () => {
  const [IsSignUp ,setSignUp]=useState(false)
  return (
    <div className="relative">
   <Header/>
   <div>
    <img src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg" alt="background image" />
   </div>
   <div className="h-[100vh] absolute top-0 w-full flex justify-center items-center">
   <form className=" rounded-lg p-8 w-3/12  bg-black bg-opacity-80 text-white flex flex-col justify-center items-center" >
  {IsSignUp?  <h1 className="font-bold text-3xl py-4 self-start">Sign Up</h1>:  <h1 className="font-bold text-3xl py-4 self-start">Sign In</h1>}
  {IsSignUp&&<input type="text" placeholder="Full Name " className="p-4 rounded-sm my-6 w-full  bg-gray-700" />}
  <input type="text" placeholder="Email Address " className="p-4 rounded-sm mb-6 w-full  bg-gray-700" />
    <input type="password" placeholder="Password " className="p-4 rounded-sm mb-6 w-full   bg-gray-700" />
    <button className="p-4 my-4 w-full bg-red-700 rounded-sm">{IsSignUp?"Sign Up":"Sign In"}</button> 
    <p className="self-start pb-6">{IsSignUp?"Already Have An Account?":"New to Netflix?"} <span onClick={()=>setSignUp(!IsSignUp)} className="hover:text-gray-400 hover:underline cursor-pointer">{IsSignUp?"Sign In Now":"Sign Up"}</span></p>
   </form>
   </div>
    </div>
  )
}
export default Login