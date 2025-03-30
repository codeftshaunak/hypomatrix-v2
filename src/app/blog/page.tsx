import { blogPosts } from "@/db/blog";
import { getPage } from "@/services/apis/page";
import BlogView from "@/views/blog";
import { notFound } from "next/navigation";

type Props = {};

const BlogPage = async (props: Props) => {
  const pageRes = await getPage("blog");

  if (!pageRes.data) {
    notFound();
  }
  return (
    <>
      <BlogView page={pageRes.data} posts={blogPosts} />
    </>
  );
};

export default BlogPage;
