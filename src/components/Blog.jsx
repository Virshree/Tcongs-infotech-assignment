import React from "react";
import video from "../assets/video.gif";

function Blog() {
  return (
    <section className="bg-gradient-to-r from-purple-900 to-blue-800">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-16 lg:px-12 lg:py-24">

        {/* Left Content */}
        <div className="text-center lg:text-left flex-1">
          <h2 className="text-white font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Build. Scale. Grow Your Digital Business.
          </h2>

          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            At Tcongs Infotech, we deliver powerful web, app, and marketing
            solutions designed to help your business grow faster, scale smarter,
            and succeed globally.
          </p>

          <button className="mt-8 rounded-xl bg-red-400 px-8 py-4 font-semibold text-black cursor-pointer">
            Start Your Project
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={video}
            alt="Digital Business"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Blog;