import { getBlogPost, getBlogPosts } from "@/services/apis/blog";
import BlogDetailsView from "@/views/blog-details";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};

async function BlogDetailsPage(props: Props) {
  const { slug } = await props.params;
  const blogPostRes = await getBlogPost(slug);

  if (!blogPostRes.data) {
    notFound();
  }

  return (
    <>
      <BlogDetailsView post={blogPostRes.data} />
    </>
  );
}

export default BlogDetailsPage;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const dataRes = await getBlogPosts();

  if (!dataRes.data) {
    return [];
  }

  return dataRes.data.map((item) => ({
    slug: item.slug,
  }));
}
