import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector  } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice';
import { useEffect} from "react";
import { LOGO } from "../utils/Constants";
const BrowseHeader = () => {
  const navigate = useNavigate(); 

  const dispatch=useDispatch();
  const photoURL = useSelector((store) => store.user?.photoURL);
  
  useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/Browse");
      } else {
      dispatch(removeUser());

      navigate('/');
      }
    });
    //using clean up function so that each time our component unmounts this event listener is not running behind just like setTimeInterval 
    return ()=>unsubscribe();
  },[])

  const handleClick = () => {

    signOut(auth)
      .then(() => {
        // Sign-out successful. 
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="relative z-10">
      <div className="absolute w-screen px-8 flex justify-between items-center py-2 bg-gradient-to-b from-black">
        <img className="w-36 md:w-44 lg:w-46" src={LOGO} alt="Netflix-logo" />
        <div className={`${auth.currentUser==null?"hidden":""}`}>
          <img className="inline mr-2" src={photoURL?photoURL:" "} alt="profile pic" />
          <span onClick={handleClick} className="hover:text-red-700 text-white cursor-pointer">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
