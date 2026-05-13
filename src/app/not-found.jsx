"use client";

import Link from "next/link";
import { Plane, Compass, Mountain, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden relative">

      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 left-2 sm:left-10 opacity-10">
        <Compass
          className="w-20 h-20 sm:w-[120px] sm:h-[120px]"
          strokeWidth={1}
        />
      </div>

      <div className="absolute bottom-5 sm:bottom-10 right-2 sm:right-10 opacity-10">
        <Mountain
          className="w-24 h-24 sm:w-40 sm:h-[160px]"
          strokeWidth={1}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 md:gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">

          <h1 className="text-[90px] sm:text-[120px] md:text-[180px] font-black leading-none text-gray-100">
            404
          </h1>

          <div className="-mt-6 sm:-mt-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Adventure Lost In The Sky
            </h2>

            <p className="text-gray-500 mt-5 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              Looks like this route has drifted off the map.
              The destination you’re searching for doesn’t exist
              or has taken another flight.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <Link
              href="/"
              className="bg-cyan-500 hover:bg-cyan-600 transition text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center"
            >
              Back To Home
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/destinations"
              className="border border-gray-300 hover:border-black transition px-6 py-3 rounded-full font-semibold text-gray-700 hover:text-black text-center"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center items-center min-h-[320px] sm:min-h-[450px] order-1 md:order-2">

          {/* Plane Trail */}
          <div className="absolute w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] border-2 border-dashed border-cyan-200 rounded-full" />

          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] border border-gray-100 rounded-full" />

          {/* Plane */}
          <div className="bg-cyan-500 text-white p-5 sm:p-8 rounded-full shadow-2xl shadow-cyan-100 z-10">
            <Plane
              className="w-14 h-14 sm:w-[80px] sm:h-[80px]"
              strokeWidth={1.8}
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-2 sm:top-8 left-0 bg-white shadow-lg border border-gray-100 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl max-w-[150px] sm:max-w-none">
            <p className="text-xs sm:text-sm text-gray-400">
              Current Route
            </p>

            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
              Unknown Destination
            </h3>
          </div>

          <div className="absolute bottom-2 sm:bottom-8 right-0 bg-white shadow-lg border border-gray-100 px-3 sm:px-5 py-2 sm:py-3 rounded-2xl max-w-[130px] sm:max-w-none">
            <p className="text-xs sm:text-sm text-gray-400">
              Status
            </p>

            <h3 className="font-semibold text-cyan-500 text-sm sm:text-base">
              Off The Map
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;