import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from "react";
import { LOGO } from "../utils/Constants";

const BrowseHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const photoURL = useSelector((store) => store.user?.photoURL);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black via-transparent to-transparent py-4">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <img className="w-28 md:w-36 lg:w-40" src={LOGO} alt="Netflix logo" />
        {auth.currentUser && (
          <div className="flex items-center space-x-4">
            {photoURL && (
              <img className="w-10 h-10 rounded-full border-2 border-white" src={photoURL} alt="Profile" />
            )}
            <span onClick={handleLogout} className="text-white cursor-pointer hover:text-red-600">
              Logout
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default BrowseHeader;
