"use client";

import { Carousel } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CarouselContainer = (props: Props) => {
  const { children } = props;

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        AutoScroll({ stopOnInteraction: false, stopOnMouseEnter: true }),
      ]}
    >
      {children}
    </Carousel>
  );
};

export default CarouselContainer;
