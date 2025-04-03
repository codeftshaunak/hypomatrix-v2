import { MotionBox } from "@/components/motion/box";
import { Button } from "@/components/ui/button";
import VideoPlaceholder from "@/components/video-modal";

export default function Hero() {
  return (
    <header className="container pt-[210px] pb-[130px] w-full">
      {/* Content */}
      <div className="relative w-full">
        <MotionBox
          initial={{ x: "5vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-heading-2 leading-[50px] min-[375px]:text-heading-1 min-[375px]:leading-[80px] pb-6 lg:pb-0 lg:text-[140px] lg:leading-[140px] xl:text-[200px] xl:leading-[200px] font-extrabold font-heading uppercase text-right">
            <span className="text-left w-full inline-block">Creative</span>
            <br />
            <span>Agency</span>
          </h1>
        </MotionBox>

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
          Learn More
        </Button>
      </MotionBox>

      {/* Video Placeholder */}
      <VideoPlaceholder />
    </header>
  );
}
