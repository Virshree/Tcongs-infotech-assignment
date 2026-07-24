import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import TrustedBanner from "./TrustedBanner";

function Hero() {


  return (
    <section className="relative  overflow-hidden  bg-slate-950 flex-col items-center">
      
      <BackgroundAnimation />
      <TrustedBanner/>
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-white font-extrabold uppercase leading-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl ">
            Smart Digital
          </span>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Solutions for Modern
          </span>
          <span className="block mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Businesses
          </span>
        </h1>

        <p className="mt-8 text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We Help Brands Grow With{" "}
          <span className="text-red-400 font-semibold">
            Web, Apps & Marketing
          </span>{" "}
          Solutions Across The Globe.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto rounded-2xl bg-white px-8 py-3 text-black font-semibold hover:bg-gray-200 transition duration-300 cursor-pointer">
            Schedule Meeting
          </button>

          <button className="w-full sm:w-auto rounded-2xl bg-slate-800 px-8 py-3 text-white font-semibold hover:bg-slate-700 transition duration-300 cursor-pointer border border-slate-700">
            Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;