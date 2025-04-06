import ReviewCard from "@/components/cards/review-card";
import SectionHeader from "@/components/common/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MotionBox } from "@/lib/motion/box";
import { getClients } from "@/services/apis/client";
import Image from "next/image";

async function TestimonialsSection() {
  const clientRes = await getClients();
  return (
    <section className="py-[130px] bg-card">
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container">
          <SectionHeader
            title="Success Stories From Around the Globe"
            subtitle={"Testimonial"}
            className="max-w-[500px] mb-16"
          />
          {/* <div className="relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 md:gap-20">
            <Image
              src={img1}
              alt="Image not found"
              className="aspect-square rounded-2xl max-w-[410px] w-full"
            />

            <Carousel className="flex-[1]">
              <CarouselContent className="mb-16">
                {clientRes.data?.map((review) => (
                  <CarouselItem key={review.id}>
                    <ReviewCard data={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="static" />
              <CarouselNext className="static ml-3" />
            </Carousel>
          </div> */}
          <Carousel className="w-full">
            <CarouselContent className="mb-16">
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
      </MotionBox>
    </section>
  );
}

export default TestimonialsSection;
