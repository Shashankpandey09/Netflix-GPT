import React from 'react';

const VideoTitle = ({ title }) => {
  return (
    <div className="pt-[10%] absolute  px-12 w-screen  aspect-video bg-gradient-to-r from-black">
      <h1 className="text-4xl w-1/2 text-white font-semibold">{title}</h1>

      <div className="flex items-center space-x-4 mt-8">
        <button className="px-8 py-3 rounded-sm text-xl bg-white hover:bg-opacity-80 text-black flex font-semibold items-center">
          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z" />
          </svg>
          <span className="ml-2">Play</span>
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 flex items-center text-white text-lg font-semibold py-3 px-8 rounded-sm">
          <i className="ri-information-line text-3xl mr-2"></i>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
