import { useEffect } from "react";
import BrowseHeader from "./BrowseHeader"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Browse = () => {
  const uid = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!uid) {
      navigate("/");
    }
  }, [uid, navigate]);
  return (
    <div >
      <BrowseHeader/>
    </div>
  )
}
export default Browse