"use client";

import VideoPlaceholder from "@/components/video-modal";

export default function Hero() {
  return (
    <header className="container text-white pb-20 pt-[210px] w-full">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.8)_0%,_transparent_30%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.8)_0%,_transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,1)_0%,_transparent_35%)]"></div>
      <div className="absolute inset-0 grid grid-cols-18 grid-rows-8 gap-0 opacity-10">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>
      {/* Content */}
      <div className="text-center w-full">
        <div className="flex gap-4 items-center justify-between mb-3">
          <h1 className="text-5xl md:text-[180px] font-extrabold uppercase">
            Creative
          </h1>
          <p className="text-lg md:text-lg text-left text-gray-300 mt-4">
            We are a{" "}
            <span className="text-xl font-semibold text-white">
              Creative Agency
            </span>{" "}
            with over 25 years of Our <br />
            experience, specializing in delivering cutting-edge <br /> digital
            solutions, including web design.
          </p>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <p className="text-lg md:text-lg text-left text-gray-300 mt-4">
            We are a{" "}
            <span className="text-xl font-semibold text-white">
              Creative Agency
            </span>{" "}
            with over 25 years of Our <br />
            experience, specializing in delivering cutting-edge <br /> digital
            solutions, including web design.
          </p>
          <h1 className="text-5xl md:text-[180px] font-extrabold uppercase">
            AGENCY
          </h1>
        </div>
        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-[#9CFE4F] text-black px-6 py-3 rounded-full flex items-center space-x-2 font-bold text-sm hover:bg-[#9CFE4F]transition">
            <span>Learn More</span>
          </button>
        </div>
      </div>
      {/* Video Placeholder */}
      <VideoPlaceholder />
    </header>
  );
}
