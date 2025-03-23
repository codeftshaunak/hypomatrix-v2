import img1 from "@/assets/testimonial.jpg";
import ReviewCard from "@/components/cards/review-card";
import SectionHeader from "@/components/common/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { reviews } from "@/db/reviews";
import Image from "next/image";

function TestimonialsSection() {
  return (
    <section className="pb-[130px] container">
      <SectionHeader
        title="Success Stories From Around the Globe"
        subtitle={"Testimonial"}
        className="max-w-[500px] mb-16"
      />
      <div className="relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center gap-12 md:gap-20">
        <Image
          src={img1}
          alt="Image not found"
          className="aspect-square rounded-2xl max-w-[410px] w-full"
        />
        <Carousel className="flex-[1]">
          <CarouselContent className="mb-16">
            {reviews.map((review) => (
              <CarouselItem key={review.id}>
                <ReviewCard data={review} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="static" />
          <CarouselNext className="static ml-3" />
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialsSection;
