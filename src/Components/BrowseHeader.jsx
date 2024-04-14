import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BrowseHeader = () => {
  const navigate = useNavigate();
  const photoURL = useSelector((store) => store.user?.photoURL);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
   
        navigate('/');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="relative z-10">
      <div className="absolute w-screen px-8 flex justify-between items-center py-2 bg-gradient-to-b from-black">
        <img className="w-36 md:w-44 lg:w-52" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Netflix-logo" />
        <div>
          <img className="inline mr-2" src={photoURL?photoURL:" "} alt="profile pic" />
          <span onClick={handleClick} className="hover:text-red-700 text-white cursor-pointer">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
