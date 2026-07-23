import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";

function Hero() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950">
        {/* Floating Background */}
        <BackgroundAnimation />

        {/* Hero Content */}
        <div className=" max-w-7xl m-auto p-2">
          <h1 className="text-6xl  uppercase font-bold text-white  text-center m-14 flex flex-col">
            <h2 className="p-3">Smart digital</h2>
            <h2 className="p-1">Solutions for modern </h2>
            <h2>Businesses</h2>
          </h1>
          <p className=" text-gray-300 text-center">
          We Help Brands Grow With <span className="text-red-400">Web, Apps & Marketing </span>Solutions Across The Globe.

          </p>
            <div className="text-center cursor-pointer">
          <button className="mt-8 rounded-xl bg-white  p-2  m-4  text-black">
          Schedule Meeting
          </button>
          <button className="mt-8 rounded-xl bg-slate-900 p-2 cursor-pointer text-white">
            Services
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
