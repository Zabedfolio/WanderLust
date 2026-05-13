const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col justify-between items-center min-h-screen">

      <div className="flex-1 flex flex-col justify-center items-center text-center gap-3.5 px-6 py-16 md:px-10 md:py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-base sm:text-lg md:text-2xl mb-6 mt-2 md:mb-10 md:mt-3 max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer w-full sm:w-auto">
            Explore Now
          </button>
          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer w-full sm:w-auto">
            View Destination
          </button>
        </div>
      </div>

      {/* Search bar — horizontal scroll on mobile */}
      <div className="w-full overflow-x-auto">
        <div className="flex min-w-max md:min-w-0 md:w-full bg-white/30">
          <div className="flex-1 py-4 px-6 border-r border-white/20 min-w-[140px]">
            <h3 className="text-white text-sm md:text-base font-semibold">Location</h3>
            <p className="text-white/70 text-xs mt-1">Address, City Or Zip</p>
          </div>
          <div className="flex-1 py-4 px-6 border-r border-white/20 min-w-[140px]">
            <h3 className="text-white text-sm md:text-base font-semibold">Date/Duration</h3>
            <p className="text-white/70 text-xs mt-1">Anytime/3 Days</p>
          </div>
          <div className="flex-1 py-4 px-6 border-r border-white/20 min-w-[120px]">
            <h3 className="text-white text-sm md:text-base font-semibold">Budget</h3>
            <p className="text-white/70 text-xs mt-1">$0–$3000</p>
          </div>
          <div className="flex-1 py-4 px-6 border-r border-white/20 min-w-[120px]">
            <h3 className="text-white text-sm md:text-base font-semibold">People</h3>
            <p className="text-white/70 text-xs mt-1">5–10</p>
          </div>
          <div className="bg-cyan-500 flex items-center justify-center px-6 md:px-10 min-w-[90px]">
            <span className="text-white font-semibold text-sm md:text-base">Search</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;