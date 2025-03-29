import dot from "@/assets/dot_vector.png";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <Card className="relative py-0 border-none">
      <CardContent className="p-8">
        <p className="font-semibold mb-6 font-heading text-heading-4 ">
          Agento Agency transformed our business with their innovative
          strategies and dedicated support. Their team understood
        </p>
        <div className="flex flex-col">
          <p className="text-heading-4 font-heading font-bold mb-0.5">
            Mr. David Liam
          </p>
          <p className="text-heading-5 font-bold font-heading text-muted-foreground">
            CEO & Founder
          </p>
        </div>

        <Image
          src={dot}
          alt="image not found"
          className="absolute right-5 bottom-5"
          width={45}
          height={40}
        />
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
