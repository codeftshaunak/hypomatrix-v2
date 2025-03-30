import {
  getBlogCategories,
  getBlogCategory,
  getBlogPosts,
} from "@/services/apis/blog";
import BlogCategoryView from "@/views/blog-category";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};

async function BlogCategoryPage(props: Props) {
  const { slug } = await props.params;
  const blogCategoryRes = await getBlogCategory(slug);
  const blogRes = await getBlogPosts();

  if (!blogCategoryRes.data) {
    notFound();
  }

  return (
    <>
      <BlogCategoryView
        category={blogCategoryRes.data}
        posts={(blogRes.data || []).filter(
          (item) => item?.category?.slug === slug
        )}
      />
    </>
  );
}

export default BlogCategoryPage;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const dataRes = await getBlogCategories();

  if (!dataRes.data) {
    return [];
  }

  return dataRes.data.map((item) => ({
    slug: item.slug,
  }));
}
