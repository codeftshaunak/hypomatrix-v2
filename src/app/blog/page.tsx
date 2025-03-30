import { getBlogPosts } from "@/services/apis/blog";
import { getPage } from "@/services/apis/page";
import BlogView from "@/views/blog";
import { notFound } from "next/navigation";

type Props = {};

const BlogPage = async (props: Props) => {
  const pageRes = await getPage("blog");
  const blogRes = await getBlogPosts();

  if (!pageRes.data) {
    notFound();
  }
  return (
    <>
      <BlogView page={pageRes.data} posts={blogRes?.data || []} />
    </>
  );
};

export default BlogPage;
