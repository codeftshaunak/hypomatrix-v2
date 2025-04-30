import { TBlogPost } from "@/types/cms/blog";
import { format } from "date-fns";
import { LucideCalendarDays, LucideTag, LucideUser2 } from "lucide-react";
import Image from "next/image";

type Props = {
  post: TBlogPost;
};

const HeroSection = (props: Props) => {
  const { post } = props;

  return (
    <>
      <div className="aspect-video relative mb-5">
        <Image
          src={post.thumbnail.url}
          alt={post.title}
          className="rounded-lg object-cover"
          fill
        />
      </div>

      <div className="flex items-center flex-wrap text-muted-foreground gap-4">
        <div className="inline-flex items-center gap-x-1">
          <LucideUser2 size={18} />
          <span>{post?.author?.name || "HypoMatrix"}</span>
        </div>

        {post.category?.title && (
          <div className="inline-flex items-center gap-x-1.5">
            <LucideTag size={18} />
            <span>{post.category?.title}</span>
          </div>
        )}

        <div className="flex-1"></div>

        <div className="inline-flex items-center gap-x-1">
          <LucideCalendarDays size={18} />
          <span>{format(post.publishDate, "dd MMM, yyyy")}</span>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
