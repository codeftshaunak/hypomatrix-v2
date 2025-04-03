import img from "@/assets/about1.jpg";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import StatsSection from "./stats";
import CommonMotionBox from "@/components/motion/common-motion";

const Hero = () => {
  return (
    <CommonMotionBox>
      <section className="container py-[130px] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 max-xl:gap-x-32">
        <div className="col-span-1 xl:col-span-2">
          <div className="max-w-[600px]">
            <SectionHeader
              title={"Strategic growth powered by HypoMatrix!"}
              subtitle={"About us"}
              className="mb-10"
            />
            <p className="text-muted-foreground mb-10">
              At Hypomatrix, we specialize in delivering strategic growth
              solutions tailored to elevate your business to new heights. By
              combining innovative strategies, data-driven insights, and
              creative expertise, we help companies unlock their full potential.
              <br />
              <br />
              Our dedicated team works closely with clients to understand their
              unique goals, crafting customized plans that drive measurable
              results.
            </p>

            <Button size={"xl"} className="mb-10">
              Learn More
            </Button>
            <StatsSection />
          </div>
        </div>

        <div className="col-span-1 xl:col-span-1">
          <div className="relative aspect-video lg:aspect-[3/4] ">
            <Image className="rounded-lg" src={img} alt="" fill />
            <div className="hidden sm:block absolute top-5 left-5 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 bg-primary text-primary-foreground px-4 py-6 rounded-lg">
              <h3 className="text-4xl font-semibold text-center">240+</h3>
              <p className="text-sm text-center">Years on the market</p>
            </div>
            <div className="absolute bottom-0 right-0 flex items-center gap-2 bg-background px-6 py-4 rounded-br-lg">
              <span className="bg-primary text-primary-foreground p-2 rounded-full">
                <PlayIcon />
              </span>
              <div className="flex flex-col">
                <p>Let&apos;s see</p>
                <p>how we did it</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CommonMotionBox>
  );
};

export default Hero;
