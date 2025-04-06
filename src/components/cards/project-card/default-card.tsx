import { cn } from "@/lib/utils";
import paths from "@/router/paths";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from ".";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

const DefaultCard = (props: ProjectCardProps) => {
  const { data, className } = props;

  return (
    <Card key={data.id} className={cn("group rounded-2xl", className)}>
      <CardContent>
        <div className="aspect-[1.3/1] w-full relative mb-[30px]">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            fill
            className="rounded-2xl object-cover"
          />
          <div className="flex flex-wrap gap-1 text-sm absolute bottom-5 left-5">
            {data.tags.map((tag, index) => (
              <Badge variant={"secondary"} className="text-sm" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <h4 className="text-sm mb-4 text-muted-foreground font-semibold">
          {data.category}
        </h4>
        <h3 className="text-heading-4 font-bold mb-1">
          <Link
            className="hover:underline"
            href={paths.portfolio.details(data.slug)}
          >
            {data.title}
          </Link>
        </h3>
        <p className="text-body text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default DefaultCard;
