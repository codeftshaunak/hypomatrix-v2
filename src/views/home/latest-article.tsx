import BlogPostCard from "@/components/cards/blog-post-card";
import { Button } from "@/components/ui/button";
import { MotionBox } from "@/lib/motion/box";
import paths from "@/router/paths";
import { getFeaturedBlogPosts } from "@/services/apis/blog";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "../../components/common/section-header";

export default async function LatestArticles() {
  const articlesRes = await getFeaturedBlogPosts(true);

  return (
    <section className="py-[130px] container">
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center mb-16">
          <SectionHeader
            subtitle="Latest Articles"
            title="Stay Updated with Our Recent Articles"
            className="max-w-[700px]"
          />
          <Button variant="outline" size={"lg"} asChild>
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
      </MotionBox>
    </section>
  );
}
