import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import paths from "@/router/paths";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from ".";
import { Card, CardContent } from "../../ui/card";

const CoverCard = (props: ProjectCardProps) => {
  const { data, className } = props;

  return (
    <Card
      key={data.id}
      className={cn(
        "group rounded-2xl relative w-full h-full overflow-hidden mt-5 sm:mt-0",
        className
      )}
    >
      <Image
        src={data.cover?.url || data.thumbnail.url}
        alt={data.title}
        fill
        className="rounded-2xl group-hover:scale-110 duration-400 object-cover"
        loading="lazy"
      />
      <CardContent className="absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center text-center bg-background/50 backdrop-blur-md bottom-5 sm:bottom-0 max-w-[80%] w-full py-5 rounded-2xl sm:opacity-0 group-hover:opacity-100 group-hover:bottom-5 duration-300">
        <Badge className="text-xs mb-4 px-4 py-1" variant={"default"}>
          {data.category}
        </Badge>
        <h3 className="text-heading-5 font-bold mb-1">
          <Link
            className="hover:underline decoration-primary"
            href={paths.works.details(data.slug)}
          >
            {data.title}
          </Link>
        </h3>
        <p className="text-sm line-clamp-2">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default CoverCard;
