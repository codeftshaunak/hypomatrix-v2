import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import { format } from "date-fns";
import { LucideCalendarDays, LucideUser2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import img from "@/assets/404.png";

type Props = {
  data: TBlogPost;
};

const GridCard = (props: Props) => {
  const { data } = props;
  return (
    <Card className="p-0 rounded-none bg-transparent border-none group">
      <Link
        href={paths.blog.details(data.slug)}
        className="w-full aspect-video relative mb-5"
      >
        <Image
          src={data.thumbnail.url}
          alt={data.title}
          className="object-cover"
          fill
        />
      </Link>
      <CardContent className="p-0">
        <div className="flex items-center text-muted-foreground gap-4 mb-3">
          {data?.author?.name && (
            <div className="inline-flex items-center gap-x-1.5">
              <LucideUser2 size={18} />
              <span>{data.author?.name}</span>
            </div>
          )}

          <div className="inline-flex items-center gap-x-1.5">
            <LucideCalendarDays size={18} />
            <span>{format(data.publishDate, "dd MMM, yyyy")}</span>
          </div>
        </div>
        <h2 className="text-heading-4 font-heading leading-normal font-bold line-clamp-2 mb-3">
          <Link
            href={paths.blog.details(data.slug)}
            className="hover:underline"
          >
            {data.title}
          </Link>
        </h2>
        <p className="text-muted-foreground line-clamp-2">{data.description}</p>
      </CardContent>
    </Card>
  );
};

export default GridCard;
