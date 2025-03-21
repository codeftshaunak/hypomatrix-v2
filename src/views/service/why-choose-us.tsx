"use client";

import Image from "next/image";
import { useState } from "react";
import img from "@/assets/about1.jpg";
import img1 from "@/assets/about1.jpg";
import img2 from "@/assets/about1.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [img, img1, img2];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="bg-black text-white py-16 flex flex-col md:flex-row items-center gap-30">
      <div className="flex-1">
        <span className="border-primary border text-white text-sm px-4 py-2 rounded-full">
          Why Choose Us
        </span>
        <h2 className="text-5xl font-bold mt-4">
          Your Trusted Partner for Success & Innovation
        </h2>
        <p className="text-gray-400 mt-4">
          At Agenko Agency, we specialize in delivering strategic growth
          solutions tailored to elevate your business to new heights. By
          combining innovative strategies, data-driven insights, and creativity.
        </p>

        <div className="mt-6">
          <div className="mb-4">
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">77%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "77%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">87%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "87%" }}
              ></div>
            </div>
          </div>

          <div>
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">81%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "81%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="w-[580px] h-[476px] overflow-hidden relative">
          <Image
            src={images[currentIndex]}
            alt="Carousel Image"
            width={580}
            height={476}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
