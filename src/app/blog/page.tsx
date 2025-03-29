import { blogPage } from "@/db/pages";
import BlogView from "@/views/blog";

type Props = {};

const BlogPage = (props: Props) => {
  return (
    <>
      <BlogView page={blogPage} />
    </>
  );
};

export default BlogPage;
