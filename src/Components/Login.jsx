import React, { useState, useRef } from "react";
import { ProfilePic } from "../utils/Constants";
import { checkValid } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import NetflixLoader from "./NetflixLoader";
import BrowseHeader from './BrowseHeader';
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
const Login = () => {
  const dispatch=useDispatch();
  const [loader, setLoader] = useState(false);
  const [IsSignUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleClick = async () => {
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const name = IsSignUp ? nameRef.current?.value : null;
    const message = checkValid(emailValue, passwordValue);
    setErrorMessage(message);

    if (!message) {
      setLoader(true);
      try {
        if (IsSignUp) {
          const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
          await updateProfile(userCredential.user, {
            displayName: name,
            photoURL: ProfilePic,
          });
          const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        } else {
          await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        }
    
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode} ${errorMessage}`);
      } finally {
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      }
    }
  };

  return (
    <div className="relative">
      <div>
        <BrowseHeader />
      </div>
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          className="object-cover w-full h-full"
          src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
          alt="background image"
        />
      </div>
      <div className="h-screen relative flex justify-center items-center">
        <div className="absolute z-20">{loader && <NetflixLoader />}</div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-lg z-0 p-8 md:w-1/2 lg:w-3/12 w-3/4 bg-black bg-opacity-80 text-white flex flex-col justify-center items-center ">
          {IsSignUp ? <h1 className="font-bold text-3xl py-4 self-start">Sign Up</h1> : <h1 className="font-bold text-3xl py-4 self-start">Sign In</h1>}
          {IsSignUp && <input ref={nameRef} type="text" placeholder="Full Name " className="p-4 rounded-sm my-6 w-full bg-gray-700" />}
          <input ref={emailRef} type="text" placeholder="Email Address " className="p-4 rounded-sm mb-6 w-full bg-gray-700" />
          <input ref={passwordRef} type="password" placeholder="Password " className="p-4 rounded-sm mb-6 w-full bg-gray-700" />
          <p className="text-red-700 self-start text-md py-2 font-semibold">{errorMessage}</p>
          <button onClick={handleClick} className="p-4 my-4 w-full bg-red-700 rounded-sm">{IsSignUp ? "Sign Up" : "Sign In"}</button>
          <p className="self-start pb-6">{IsSignUp ? "Already Have An Account?" : "New to Netflix?"} <span onClick={() => setSignUp(!IsSignUp)} className="hover:text-gray-400 hover:underline cursor-pointer">{IsSignUp ? "Sign In Now" : "Sign Up"}</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
