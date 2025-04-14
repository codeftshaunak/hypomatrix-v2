import ReviewCard from "@/components/cards/review-card";
import SectionHeader from "@/components/common/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getClients } from "@/services/apis/client";
import Image from "next/image";

async function TestimonialsSection() {
  const clientRes = await getClients();
  return (
    <section className="py-[50px] md:py-[130px] bg-card">
      <CommonMotionBox>
        <div className="container">
          <SectionHeader
            title="Success Stories From Around the Globe"
            subtitle={"Testimonial"}
            className="max-w-[500px] mb-16"
          />

          <Carousel className="w-full">
            <CarouselContent className="md:mb-16 mb-10">
              {clientRes.data?.map((review) => (
                <CarouselItem key={review.id}>
                  <div className="relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 md:gap-20">
                    <Image
                      src={review.avatar.url}
                      alt="Image not found"
                      className="aspect-square rounded-2xl max-w-[410px] w-full"
                      height={100}
                      width={100}
                    />
                    <ReviewCard data={review} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="static" />
            <CarouselNext className="static ml-3" />
          </Carousel>
        </div>
      </CommonMotionBox>
    </section>
  );
}

export default TestimonialsSection;
