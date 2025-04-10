"use client";
import { CarouselApi } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import MemberCard from "@/components/cards/member-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionHeader from "../../components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";
import { TMember } from "@/types/cms/team";

type Props = {
  members: TMember[];
};

const TeamCarousel = (props: Props) => {
  const { members } = props;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);
  return (
    <section id="team" className="pb-[130px] container">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Talented Skillful Team!"
          className="max-w-[500px] mb-[60px]"
        />
        <Carousel opts={{ loop: true, align: "center" }} setApi={setApi}>
          <CarouselContent className="-ml-6 mb-16 mt-5">
            {members.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/5 pl-6"
              >
                <div
                  className={`transition-all duration-300 ${
                    current === index ? "scale-110 shadow-lg z-10" : "scale-100"
                  }`}
                >
                  <MemberCard data={member} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="static" />
          <CarouselNext className="static ml-2" />
        </Carousel>
      </CommonMotionBox>
    </section>
  );
};

export default TeamCarousel;
