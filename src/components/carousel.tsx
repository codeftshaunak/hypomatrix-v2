"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import MemberCard from "./cards/member-card";
import CarouselContainer from "@/views/about/team/carousel-container";

export function MemberCarousel({ members }: { members: any[] }) {
  // Determine order based on role
  const getRolePosition = (role: string) => {
    if (role.includes("Engineer")) return "order-3";
    if (role.includes("CEO")) return "order-2";
    return "order-1";
  };

  return (
    <Carousel className="w-full">
      <CarouselContainer>
        <CarouselContent>
          {members.map((member) => (
            <CarouselItem
              key={member.id}
              className={cn(
                // Show different number of items based on screen size
                "sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5",
                getRolePosition(member.role)
              )}
            >
              <MemberCard data={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselContainer>
      <div className="flex justify-end mt-8">
        <CarouselPrevious className="static" />
        <CarouselNext className="static ml-2" />
      </div>
    </Carousel>
  );
}
