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

          <Carousel
            className="w-full"
            opts={{
              loop: true,
              skipSnaps: true,
              active: true,
              align: "start",
            }}
          >
            <CarouselContent className="md:mb-16 mb-10">
              {clientRes.data?.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2">
                  <ReviewCard data={review} className="h-full" />
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
