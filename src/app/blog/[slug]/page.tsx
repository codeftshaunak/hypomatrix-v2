import { blogPosts } from "@/db/blog";
import BlogDetailsView from "@/views/blog-details";

type Props = {};

function BlogDetailsPage({}: Props) {
  return (
    <>
      <BlogDetailsView post={blogPosts[0]} />
    </>
  );
}

export default BlogDetailsPage;
