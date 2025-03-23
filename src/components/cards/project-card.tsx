import paths from "@/router/paths";
import { TProject } from "@/types/cms/project";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type Props = {
  data: TProject;
};

const ProjectCard = (props: Props) => {
  const { data } = props;

  return (
    <Card key={data.id} className="group rounded-2xl">
      <CardContent>
        <div className="aspect-[1.3/1] w-full relative mb-[30px]">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            fill
            className="rounded-2xl"
          />
          <div className="flex gap-1 text-sm absolute bottom-5 left-5">
            {data.tags.map((tag, index) => (
              <Badge variant={"secondary"} className="text-sm" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="text-sm mb-4 text-primary font-semibold">
          {data.category}
        </h3>
        <h2 className="text-heading-4 font-bold mb-1">
          <Link
            className="hover:underline"
            href={paths.portfolio.details(data.slug)}
          >
            {data.title}
          </Link>
        </h2>
        <p className="text-body text-muted-foreground">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
