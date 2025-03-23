import BlogPostCard from "@/components/cards/blog-post-card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/db/blog";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "../../components/common/section-header";

export default function LatestArticles() {
  return (
    <section className="py-[130px] container">
      <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center mb-16">
        <SectionHeader
          subtitle="Latest Articles"
          title="Stay Updated with Our Recent Articles"
          className="max-w-[700px]"
        />
        <Button variant="outline" size={"lg"}>
          View all Blogs <ArrowUpRight size={18} />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {blogPosts.map((item) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
