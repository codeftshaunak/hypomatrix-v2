import { blogCard } from "@/db/pages";
import BlogCardView from "@/views/blog-card";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BlogCardView page={blogCard} />
    </div>
  );
};

export default page;
