import img1 from "@/assets/Join Cercle.png";
import img from "@/assets/Pattan.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  link: string;
  text: string;
};

const PageHeader: React.FC<Props> = ({ title, link, text }) => {
  return (
    <header className="bg-secondary text-white overflow-hidden relative w-full pt-[210px]">
      {/* Background elements */}
      <div className="absolute -left-[5%] -top-[45%]">
        <div className="border border-foreground/20 size-[979px] rounded-full" />
      </div>

      <div className="absolute right-0 -top-[130%]">
        <div className="border border-foreground/20 size-[765px] rounded-full" />
      </div>

      <div className="container">
        {/* Main Content */}
        <main className="relative px-6  pb-20">
          <div className="">
            {/* About Us Title */}
            <h1 className="text-6xl md:text-7xl font-bold mb-10">{title}</h1>

            {/* About Content */}
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex items-center space-x-6 md:w-1/2 mb-10 md:mb-0">
                {/* Star/Asterisk Icon */}
                <Image
                  src={img}
                  alt=""
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
    </header>
  );
};

export default PageHeader;
