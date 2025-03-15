"use client";

import { Play, X } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-white px-6 md:px-12 py-20 bg-black">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-black to-purple-900 opacity-20"></div>
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-2 opacity-10">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="border border-gray-700"></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase">
          Creative <br /> Agency
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          We are a <span className="font-bold">Creative Agency</span> with over{" "}
          <span className="font-bold">25 years</span> of experience,
          specializing in delivering cutting-edge digital solutions, including
          web design.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-[#9CFE4F] text-black px-6 py-3 rounded-full flex items-center space-x-2 font-bold text-sm hover:bg-[#9CFE4F]transition">
            <span>Learn More</span>
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Video Placeholder */}
      <div className="relative z-10 mt-12 w-full max-w-4xl">
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
