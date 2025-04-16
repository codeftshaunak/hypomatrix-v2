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
import CarouselCard from "@/components/carousel";

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
    <section id="team" className="md:pb-[130px] pb-[50px] container">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Talented Skillful Team!"
          className="max-w-[500px] mb-[60px]"
        />

        <Carousel opts={{ loop: true, align: "center" }} setApi={setApi}>
          <CarouselContent className="mb-16 mt-5 items-center">
            {members.map((member, index) => (
              <CarouselItem
                key={member.id}
                className={`md:flex-none  w-[220px] ${
                  current === index ? "w-[340px]" : "w-[240px]"
                }`}
              >
                <div
                  onClick={() => {
                    setCurrent(index);
                    api?.scrollTo(index);
                  }}
                  className={`transform transition-all duration-300 ease-in-out${
                    current === index ? "scale-100" : "scale-100"
                  }
                  `}
                >
                  <CarouselCard data={member} current={current} index={index} />
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
