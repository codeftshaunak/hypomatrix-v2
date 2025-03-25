import { TBlogPost } from "@/types/cms/blog";
import DefaultCard from "./default-card";
import VerticalCard from "./vertical-card";

type Props = {
  data: TBlogPost;
  variant?: "default" | "vertical";
};

const BlogPostCard = (props: Props) => {
  const { data, variant = "default" } = props;

  if (variant === "vertical") {
    return <VerticalCard data={data} />;
  }

  return <DefaultCard data={data} />;
};

export default BlogPostCard;
