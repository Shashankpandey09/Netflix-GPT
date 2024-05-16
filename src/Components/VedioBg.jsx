import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrailer } from "../utils/TrailerSlice";

const VideoBg = ({ title }) => {
  const { trailer } = useSelector((store) => store.trailer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (title) {
      dispatch(getTrailer(title));
    }
  }, [dispatch, title]);

  // Ensure trailer object and videoId are available before rendering iframe
  const videoId = trailer?.videoId || "";

  return (
    <div className="w-screen aspect-video ">
      {videoId && (
        <iframe
          className=" w-screen aspect-video "
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default VideoBg;
