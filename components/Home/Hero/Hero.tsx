import SearchBox from "../../Helper/SearchBox";

const Hero = () => {
  return (
    <div
      className="bg-[url('/images/bg.jpeg')] bg-cover bg-center relative w-full bg-[#0f0715] h-screen
    
    pt-[4vh]"
    >
      {/* black overlay */}
      <div className="absolute bg-black opacity-70 inset-0"></div>
      {/* content */}
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10">
        <h1 className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium">
          The Best Way To
        </h1>
        <h1 className="text-center font-semibold text-3xl sm:text-5xl text-white mt-4 shadow-md">
          Find Your Dream Home
        </h1>
        <p className="text-white text-sm mt-5">
          We've more than 745,000 apartment place & plot
        </p>
        <div className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
