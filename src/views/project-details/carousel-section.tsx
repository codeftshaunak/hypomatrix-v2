import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TProject } from "@/types/cms/project";
import Image from "next/image";

type Props = {
  images: TProject["images"];
};

const CarouselSection = (props: Props) => {
  const { images } = props;
  return (
    <Carousel>
      <CarouselContent className="mb-16 lg:mb-0">
        {images.map((image, index) => (
          <CarouselItem key={index} className="sm:basis-1/2">
            <div className="relative aspect-square">
              <Image
                src={image.url}
                alt={`Image ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="static lg:absolute max-xl:-left-10" />
      <CarouselNext className="static lg:absolute ml-2 lg:ml-0 max-xl:-right-10" />
    </Carousel>
  );
};

export default CarouselSection;
