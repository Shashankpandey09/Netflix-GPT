import React, { useRef } from 'react';

const MovieList = ({ movies, title }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className=" p-4 relative">
      <h1 className="text-3xl text-white font-bold mb-6">{title}</h1>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0s top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-6 rounded-full z-10 hover:bg-opacity-75 transition duration-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div
  className="flex overflow-x-scroll  scrollbar-hide space-x-4 pb-4"
  ref={scrollContainerRef}
>
  {movies.map((movie) => (
    <img
      src={movie.image}
      alt={movie.title}
      key={movie.id}
      className="w-60 sm:w-72 md:w-80 lg:w-96 h-60 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-6 rounded-full z-10 hover:bg-opacity-75 transition duration-300 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
