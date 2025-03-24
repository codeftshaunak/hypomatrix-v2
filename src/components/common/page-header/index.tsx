import img1 from "@/assets/Join Cercle.png";
import pattan from "@/assets/Pattan.png";
import Image from "next/image";
import React from "react";
import Breadcrumb, { BreadcrumbLink } from "./breadcrumb";

type Props = {
  title: string;
  description: string;
  links?: BreadcrumbLink[];
};

const PageHeader: React.FC<Props> = (props) => {
  const { title, description, links = [] } = props;
  return (
    <header className="bg-card text-card-foreground overflow-hidden relative w-full pt-[210px] pb-[130px]">
      {/* Background elements */}
      <div className="absolute -left-[5%] -top-[45%] pointer-events-none">
        <div className="border border-foreground/20 size-[979px] rounded-full" />
      </div>

      <div className="absolute right-0 -top-[130%] pointer-events-none">
        <div className="border border-foreground/20 size-[765px] rounded-full" />
      </div>

      <div className="container relative">
        <h1 className="text-heading-2 md:text-[70px] font-heading font-bold mb-2 md:mb-8">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row items-center w-full gap-y-10 gap-x-6">
          <div className="flex items-center gap-x-6">
            <Image
              src={pattan}
              alt=""
              priority
              className="spin-in animate-spin duration-7000 max-sm:hidden"
            />

            {/* Description */}
            <p className="md:text-xl font-heading lg:max-w-[500px] w-full">
              {description}
            </p>
          </div>

          <div className="flex items-center ml-auto max-md:w-full">
            <div className="mx-4 h-[1px] w-full grow md:w-32 bg-border"></div>
            <Breadcrumb links={links} />
          </div>
        </div>

        <div className="absolute right-4 top-0 -translate-y-full md:-translate-y-1/2 md:right-20">
          <Image
            src={img1}
            alt="Join Our Team"
            priority
            width={100}
            className="md:w-[130px] spin-in animate-spin duration-7000"
          />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
