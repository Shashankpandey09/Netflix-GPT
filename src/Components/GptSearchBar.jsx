const GptSearchBar = () => {
  return (
    <div className=" pt-[8%] flex justify-center">
      <form className=" grid grid-cols-12 w-1/2 ">
        <input
          type="text"
          placeholder="What would you like to watch? "
          className="focus:outline-none rounded-md pl-2 mr-2 col-span-7"
        />
        <button className="bg-red-700 text-white p-2 col-span-3">
          Search
        </button>
        <select className=" ml-2 col-span-2" >
       {lang}
        </select>
      </form>
    </div>
  );
};
export default GptSearchBar;
