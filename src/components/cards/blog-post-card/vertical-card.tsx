import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import { format } from "date-fns";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../../ui/card";

type Props = {
  data: TBlogPost;
};

const VerticalCard = (props: Props) => {
  const { data } = props;
  return (
    <Card className="p-0 rounded-none bg-transparent border-none group">
      <Link href={paths.blog.details(data.slug)}>
        <div className="w-full aspect-video relative mb-5">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            className="object-cover"
            fill
          />
        </div>
        <CardContent className="p-0 flex flex-row items-start justify-between">
          <div>
            <div className="flex items-center text-muted-foreground gap-2.5 mb-1.5">
              <span>{data.category?.title}</span>
              <span className="p-0.5 bg-muted-foreground rounded-full" />
              <span>{format(data.publishDate, "dd MMM, yyyy")}</span>
            </div>
            <h3 className="text-heading-4 lg:text-heading-3 font-heading font-bold line-clamp-2">
              {data.title}
            </h3>
          </div>

          <button className="size-12 group-hover:text-primary flex items-center justify-center rounded-full bg-card shrink-0 cursor-pointer">
            <LucideArrowRight className="size-6 group-hover:-rotate-[45deg] transition-transform duration-200" />
          </button>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VerticalCard;
