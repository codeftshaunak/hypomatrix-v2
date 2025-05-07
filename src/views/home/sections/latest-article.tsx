import BlogPostCard from "@/components/cards/blog-post-card";
import { Button } from "@/components/ui/button";
import CommonMotionBox from "@/lib/motion/common-motion";
import paths from "@/router/paths";
import { getFeaturedBlogPosts } from "@/services/apis/blog";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../../../components/common/section-header";

export default async function LatestArticles() {
  const articlesRes = await getFeaturedBlogPosts(true);

  return (
    <section className="py-[50px] md:py-[130px] container">
      <CommonMotionBox>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center md:mb-16 mb-6">
          <SectionHeader
            subtitle="Latest Articles"
            title="Stay Updated with Our Recent Articles"
            className="max-w-[700px]"
          />
          <Button variant="outline" size={"lg"} asChild className="mt-2">
            <Link href={paths.blog.root}>
              View all Blogs <ArrowUpRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {articlesRes.data?.map((item) => (
            <BlogPostCard data={item} key={item.id} />
          ))}
        </div>
      </CommonMotionBox>
    </section>
  );
}
