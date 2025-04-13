import { Button } from "@/components/ui/button";
import VideoPlaceholder from "@/components/video-modal";
import { MEETING_MODAL_KEY } from "@/config/keys";
import { MotionBox } from "@/lib/motion/box";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import img2 from "@/assets/vector2.png";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="container pt-[210px] md:pb-[130px] pb-[100px] w-full">
      {/* Content */}
      <div className="relative w-full">
        <MotionBox
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="uppercase mb-10 md:mb-3">
            <span className="text-center md:text-left w-full inline-block text-[35px] sm:text-[40px] md:text-[80px]  lg:text-[110px] lg:leading-[95px] xl:text-[150px] xl:leading-[100px] font-extrabold">
              HypoMatrix
            </span>
            <span className="text-center w-full inline-block text-[30px] sm:text-[40px] md:text-[80px]  lg:text-[110px] lg:leading-[95px] xl:text-[150px] xl:leading-[100px] font-extrabold md:text-right xl:mt-[30px] md:mt-[20px] mt-[10px]">
              Solutions
            </span>
          </div>
        </MotionBox>
        <Image
          src={img2}
          width={100}
          height={200}
          alt="Profile picture"
          className="h-auto w-[150px] md:w-[200px] lg:w-[300px] object-cover absolute right-0 -top-20 spinner-border spin-in animate-spin duration-9000"
        />
        <div className="">
          <p className="text-muted-foreground lg:mb-8 xl:mb-14 text-body max-w-[350px] text-start">
            Achieve unparalleled digital success with {""}
            <span className="font-semibold text-foreground">
              HypoMatrix{" "}
            </span>{" "}
            Our innovative solutions and expert team are here to elevate your
            brand and reach new heights.
          </p>
        </div>
      </div>
      <MotionBox
        initial={{ y: "3vw", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Button size={"xl"} className="mt-8 lg:mt-0 md:mb-[130px] mb-[50px]">
          <Link href={`?${MEETING_MODAL_KEY}=true`}>
            Book A Free Consultant
          </Link>
          <ArrowRight size={20} />
        </Button>
      </MotionBox>
      {/* Video Placeholder */}
      <VideoPlaceholder />
    </header>
  );
}
