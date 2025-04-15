import { TServiceStep } from "@/types/cms/service";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

type Props = {
  index: number;
  data: TServiceStep;
};

const ServiceStepCard = (props: Props) => {
  const { index, data } = props;
  return (
    <Card className="relative p-0 bg-transparent border-0 lg:border lg:border-b-0 lg:border-x-0 rounded-none pt-12 before:p-1 before:absolute before:left-0 before:top-0 lg:before:bg-primary before:rounded-full before:-translate-y-1/2">
      <CardContent className="py-0 md:pl-0 h-full flex flex-col">
        <span className="size-12 text-muted-foreground flex items-center justify-center bg-card rounded-full mb-8">
          0{index}
        </span>
        <h3 className="text-heading-4 font-bold mb-2">{data.title}</h3>
        <p className="text-muted-foreground mb-5">{data.description}</p>
        <div className="aspect-square relative w-full mt-auto">
          <Image
            src={data.image.url}
            alt={data.title}
            fill
            className="object-cover rounded-xl mx-auto"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceStepCard;
