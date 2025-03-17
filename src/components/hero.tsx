"use client";

import { Play, X } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-white px-6 py-20 bg-black w-full">
      {/* Background Grid Effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-black to-purple-400 opacity-40"></div> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,1)_0%,_transparent_30%)]"></div> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.8)_0%,_transparent_30%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.8)_0%,_transparent_30%)]"></div>
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
      <div className="mt-12 w-full">
        <div className="bg-gray-300 w-full h-[250px] md:h-[500px] flex items-center justify-center rounded-lg relative">
          <span className="text-gray-600 text-3xl md:text-5xl font-bold">
            1290 × 500
          </span>
          <button className="absolute bg-[#9CFE4F] p-4 rounded-full flex items-center justify-center">
            <Play size={24} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
}
