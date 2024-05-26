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
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
    <header className={`fixed top-0 left-0 w-full z-50 py-4 transition-opacity duration-600 ${scroll ? 'bg-black bg-opacity-100' : 'bg-transparent'}`}>
      <div className="container mx-auto px-8 flex justify-between items-center h-9">
        <div className="flex items-center space-x-8">
          <img className="w-28 md:w-36 lg:w-40 cursor-pointer" src={LOGO} alt="Netflix logo" onClick={() => navigate('/')} />
          {auth.currentUser&&<nav className="hidden md:flex space-x-4">
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/')}>Home</span>
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/tv-shows')}>TV Shows</span>
            <span className="text-white cursor-pointer hover:text-gray-300 transition duration-300" onClick={() => navigate('/new-popular')}>New & Popular</span>
          </nav>}
        </div>
        <div className="flex items-center space-x-4">
        {auth.currentUser&&<div className="relative flex items-center">
            <button
              onClick={() => setSearchActive(!searchActive)}
              className="text-white hover:text-gray-300 transition duration-300"
            >
              <i className="ri-search-line text-2xl"></i>
            </button>
            <input
              type="text"
              placeholder="Titles, people, genres"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`bg-transparent border-b border-gray-500 py-1 px-4 ml-2 transition-width duration-300 text-white placeholder-gray-500 focus:outline-none focus:border-white ${searchActive ? 'w-64' : 'w-0'} ${searchActive ? 'opacity-100' : 'opacity-0'}`}
          
            />
          </div>}
          {auth.currentUser && (
            <div className="flex items-center space-x-4">
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
