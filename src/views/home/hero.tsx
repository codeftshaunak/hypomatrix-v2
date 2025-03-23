import { Button } from "@/components/ui/button";
import VideoPlaceholder from "@/components/video-modal";

export default function Hero() {
  return (
    <header className="container pt-[210px] w-full">
      {/* Content */}
      <div className="relative w-full">
        <h1 className="text-heading-1 leading-[80px] pb-6 lg:pb-0 lg:text-[140px] lg:leading-[140px] xl:text-[200px] xl:leading-[200px] font-extrabold font-heading uppercase text-right">
          <span className="text-left w-full inline-block">Creative</span>
          <br />
          <span>Agency</span>
        </h1>

        <div className="md:absolute left-0 bottom-0">
          <p className="text-muted-foreground lg:mb-8 xl:mb-14 text-body">
            We are a{" "}
            <span className="font-semibold text-foreground">
              Creative Agency
            </span>{" "}
            with over 25 years of Our <br />
            experience, specializing in delivering cutting-edge <br /> digital
            solutions, including web design.
          </p>
        </div>
      </div>
      <Button size={"xl"} className="mt-8 lg:mt-0 mb-[130px]">
        Learn More
      </Button>

      {/* Video Placeholder */}
      <VideoPlaceholder />
    </header>
  );
}
