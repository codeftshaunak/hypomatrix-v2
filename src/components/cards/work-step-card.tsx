import Image from "next/image";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { TWorkStep } from "@/types/cms/common";

type Props = {
  index: number;
  data: TWorkStep;
};

const WorkStepCard = (props: Props) => {
  const { index, data } = props;
  return (
    <div key={index} className="relative flex flex-col items-center border-t">
      <Badge className="text-sm absolute top-0 -translate-y-1/2 px-4">
        Step-{index}
      </Badge>
      <div className="h-[80px] w-px bg-border"></div>
      <Card className="mx-4">
        <CardContent className="flex flex-col items-center justify-center text-center min-h-[200px]">
          <div className="size-12 rounded-full border inline-flex items-center justify-center mb-6 text-primary">
            <Image
              src={data.image.url}
              height={16}
              width={16}
              alt={data.title}
            />
          </div>
          <h3 className="text-lg font-bold mb-2 line-clamp-1">{data.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {data.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkStepCard;
