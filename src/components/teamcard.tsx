// components/TeamCarousel.tsx
"use client";

import Slider from "react-slick";
import { useState } from "react";
import type { TMember } from "@/types/cms/team";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropsCard = {
  members: TMember[];
};

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute bottom-[-16] left-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronLeft className="w-5 h-5 text-black" />
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute bottom-[-16] left-14  z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
  >
    <ChevronRight className="w-5 h-5 text-black" />
  </button>
);

const TeamCarousel = ({ members }: PropsCard) => {
  const [activeIndex, setActiveIndex] = useState(2); // Center of 5

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => {
      setActiveIndex(next);
    },
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-10 relative container">
      <Slider {...settings}>
        {members.map((member, index) => (
          <div key={member.slug} onClick={() => setActiveIndex(index)}>
            <CustomCard data={member} isActive={index === activeIndex} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

type Props = {
  data: TMember;
  isActive: boolean;
};

const CustomCard = ({ data, isActive }: Props) => {
  return (
    <div
      className={`transition-all duration-300 w-full rounded-xl overflow-hidden ${
        isActive ? "scale-110 shadow-lg" : "opacity-50 scale-100"
      }`}
    >
      <div className="w-[300px]">
        <img
          src={data.avatar.url}
          alt={data.name}
          className="w-[300px] h-[400px] object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <p className="text-sm text-gray-400">{data.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
