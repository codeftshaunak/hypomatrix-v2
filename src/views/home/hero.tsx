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
    <header className="container pt-[210px] md:pb-[130px] pb-[50px] w-full">
      {/* Content */}
      <div className="relative w-full">
        <MotionBox
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="text-[70px] leading-[70px] min-[375px]:text-heading-1 min-[375px]:leading-[80px] pb-6 lg:pb-0 lg:text-[140px] lg:leading-[140px] xl:text-[180px] xl:leading-[200px] font-extrabold font-heading uppercase">
            <span className="text-center md:text-left w-full inline-block text-[50px] lg:text-[90px] lg:leading-[140px] xl:text-[200px] xl:leading-[100px] font-extrabold">
              HypoMatrix
            </span>
            <span className="text-center w-full inline-block text-[50px] lg:text-[90px] lg:leading-[140px] xl:text-[160px] xl:leading-[100px] font-extrabold md:text-right">
              Solutions
            </span>
          </div>
          {/* <h1 className="text-[70px] leading-[70px] min-[375px]:text-heading-1 min-[375px]:leading-[80px] pb-6 lg:pb-0 lg:text-[140px] lg:leading-[140px] xl:text-[200px] xl:leading-[200px] font-extrabold font-heading uppercase md:text-right">
            <span className="text-left w-full inline-block">Creative</span>
            <br />
            <span>Agency</span>
          </h1> */}
        </MotionBox>
        <Image
          src={img2}
          width={400}
          height={200}
          alt="Profile picture"
          className="h-auto object-cover absolute right-0 -top-20  spinner-border spin-in animate-spin duration-9000"
        />
        <div className="md:absolute left-0 bottom-0">
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
        <Button size={"xl"} className="mt-8 lg:mt-0 mb-[130px]">
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
