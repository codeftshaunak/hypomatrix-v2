import { blogDetails } from "@/db/pages";
import BlogDetailsView from "@/views/blog-details";

type Props = {};

function BlogDetailsPage({}: Props) {
  return (
    <>
      <BlogDetailsView page={blogDetails} />
    </>
  );
}

export default BlogDetailsPage;
