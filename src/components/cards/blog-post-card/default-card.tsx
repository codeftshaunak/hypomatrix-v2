import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";

type Props = {
  data: TBlogPost;
};

const DefaultCard = (props: Props) => {
  const { data } = props;
  return (
    <Card>
      <CardContent className="flex flex-col gap-8 sm:flex-row sm:gap-4 items-center">
        <div className="w-full sm:w-[160px] xl:w-[260px] aspect-video sm:aspect-square relative shrink-0">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div>
          <Badge>{data.category?.title}</Badge>
          <h3 className="text-heading-4 font-heading font-bold mt-5 line-clamp-2">
            <Link
              href={paths.blog.details(data.slug)}
              className="hover:underline decoration-primary"
            >
              {data.title}
            </Link>
          </h3>
          <p className="text-muted-foreground mt-2 line-clamp-2">
            {data.description}
          </p>

          <p className="text-muted-foreground mt-5 xl:mt-12">
            {format(data.publishDate, "dd MMM, yyyy")}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DefaultCard;
