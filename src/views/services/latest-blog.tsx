import BlogPostCard from "@/components/cards/blog-post-card";
import SectionHeader from "@/components/common/section-header";
import { blogPosts } from "@/db/blog";

const LatestBlogs = () => {
  return (
    <section className="container pb-[130px]">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <SectionHeader
          title={"Expert Insights and News Stay Ahead with Us"}
          subtitle={"Latest Blogs"}
          className="lg:max-w-[600px]"
        />
        <p className="text-muted-foreground lg:max-w-[400px]">
          Explore expert insights,{" "}
          <span className="font-semibold text-foreground">industry trends</span>
          , and the latest digital news to keep your business informed and ahead
          of the competition
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mt-12">
        {blogPosts.map((blog) => (
          <BlogPostCard variant="vertical" data={blog} key={blog.id} />
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
