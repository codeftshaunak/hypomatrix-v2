"use client";
import { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import MemberCard from "@/components/cards/member-card";
import SectionHeader from "@/components/common/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CommonMotionBox from "@/lib/motion/common-motion";
import { cn } from "@/lib/utils";
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
    <section id="team" className="md:pb-[130px] pb-[50px] container">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Talented Skillful Team!"
          className="max-w-[590px] mb-[60px]"
        />

        <Carousel opts={{ loop: true, align: "center" }} setApi={setApi}>
          <CarouselContent className="mb-16 items-center -ml-4">
            {members.map((member, index) => (
              <CarouselItem
                onClick={() => {
                  setCurrent(index);
                  api?.scrollTo(index);
                }}
                key={member.id}
                className={cn("sm:basis-1/2 md:basis-1/3 lg:basis-1/4")}
              >
                <MemberCard data={member} isActive={index === current} />
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
