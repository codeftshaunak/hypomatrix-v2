import { TBlogPost } from "@/types/cms/blog";
import DefaultCard from "./default-card";
import GridCard from "./grid-card";
import VerticalCard from "./vertical-card";

type Props = {
  data: TBlogPost;
  variant?: "default" | "vertical" | "grid";
};

const BlogPostCard = (props: Props) => {
  const { data, variant = "default" } = props;

  if (variant === "vertical") {
    return <VerticalCard data={data} />;
  }

  if (variant === "grid") {
    return <GridCard data={data} />;
  }

  return <DefaultCard data={data} />;
};

export default BlogPostCard;
