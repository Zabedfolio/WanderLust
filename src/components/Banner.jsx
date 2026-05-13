import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col justify-between items-center min-h-screen">
      
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-3.5 px-10 py-20">
        <h1 className="text-7xl font-bold">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl mb-10 mt-3">
          Explore breathtaking destinations and create unforgettable memories
          with <br /> our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>
          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className="flex w-full bg-white/30">
        <div className="flex-1 py-4 px-6 border-r border-white/20">
          <h3 className="text-white text-base font-semibold">Location</h3>
          <p className="text-white/70 text-xs mt-1">Address, City Or Zip</p>
        </div>
        <div className="flex-1 py-4 px-6 border-r border-white/20">
          <h3 className="text-white text-base font-semibold">Date/Duration</h3>
          <p className="text-white/70 text-xs mt-1">Anytime/3 Days</p>
        </div>
        <div className="flex-1 py-4 px-6 border-r border-white/20">
          <h3 className="text-white text-base font-semibold">Budget</h3>
          <p className="text-white/70 text-xs mt-1">$0-$3000</p>
        </div>
        <div className="flex-1 py-4 px-6 border-r border-white/20">
          <h3 className="text-white text-base font-semibold">People</h3>
          <p className="text-white/70 text-xs mt-1">5-10</p>
        </div>
        <div className="bg-cyan-500 flex items-center justify-center px-10">
          <span className="text-white font-semibold text-base">Search</span>
        </div>
      </div>

    </div>
  );
};

export default Banner;