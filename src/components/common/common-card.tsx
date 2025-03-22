import Link from "next/link";
import Image from "next/image";
import img from "@/assets/Pattan.png";
import img1 from "@/assets/Join Cercle.png";
import img3 from "@/assets/Ellipse 2397.png";
import React from "react";

type Props = {
  title: string;
  link: string;
  text: string;
};

const CommonCard: React.FC<Props> = ({ title, link, text }) => {
  return (
    <div className="bg-black text-white overflow-hidden relative mb-20 w-full">
      {/* Background elements */}
      <div>
        <div className="">
          <Image
            src={img3}
            alt=""
            className="object-cover opacity-36 absolute"
            priority
          />
          <Image
            src={img3}
            alt=""
            className="object-cover opacity-36 absolute -top-[550px] -right-40 rotate-100"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative  px-6 pt-20 pb-20">
        <div className="">
          {/* About Us Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-10">{title}</h1>

          {/* About Content */}
          <div className="flex flex-col md:flex-row items-start">
            <div className="flex items-center space-x-6 md:w-1/2 mb-10 md:mb-0">
              {/* Star/Asterisk Icon */}
              <Image
                src={img}
                alt="image not found"
                priority
                className="spin-in animate-spin duration-7000"
              />

              {/* Description */}
              <div>
                <p className="text-xl">
                  Agenko empowers businesses with innovative strategies &
                  creative agency solutions
                </p>
              </div>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center">
              <div className="mx-4 h-[1px] w-32 bg-gray-300"></div>
              <div className="border border-gray-700 rounded-full text-sm py-3 px-6 cursor-pointer">
                <Link href="/" className="text-gray-400 hover:text-[#9eff3c]">
                  Home
                </Link>
                <span className="border-r border border-gray-400 mx-5"></span>
                <Link href={`/${link}`} className="text-[#9eff3c]">
                  {text}
                </Link>
              </div>
            </div>
            <div className="spin-in animate-spin duration-7000 absolute right-20 bottom-30">
              <Image src={img1} alt="" priority />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CommonCard;
