import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect, useState } from "react";
import { LOGO } from "../utils/Constants";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photoURL = useSelector((store) => store.user?.photoURL);
  const [scroll, setScroll] = useState(false);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      alert(error.message);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${scroll ? 'bg-black bg-opacity-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center h-9">
        <div className="flex items-center space-x-8">
          <img className="w-28 md:w-36 lg:w-40 cursor-pointer" src={LOGO} alt="Netflix logo" onClick={() => navigate('/')} />
          {auth.currentUser&&<nav className="hidden md:flex space-x-4">
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/')}>Home</span>
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/tv-shows')}>TV Shows</span>
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/new-popular')}>New & Popular</span>
          </nav>}
        </div>
           <div>
          {auth.currentUser && (
            <div className="flex items-center space-x-4">
              <button onClick={()=>navigate("/Gpt")} className="bg-purple-800 text-white rounded-md py-2 px-3 hover:bg-purple-600">GpT Search</button>
              {photoURL && (
                <img className="w-10 h-10 rounded-full border-2 border-white" src={photoURL} alt="Profile" />
              )}
              <span onClick={handleLogout} className="text-white cursor-pointer hover:text-red-600 transition duration-300">
                Logout
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default BrowseHeader;
