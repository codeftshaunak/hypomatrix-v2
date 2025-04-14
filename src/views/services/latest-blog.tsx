import BlogPostCard from "@/components/cards/blog-post-card";
import SectionHeader from "@/components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getFeaturedBlogPosts } from "@/services/apis/blog";

const LatestBlogs = async () => {
  const blogPostsRes = await getFeaturedBlogPosts(true);

  return (
    <section className="container md:pb-[130px] pb-[50px]">
      <CommonMotionBox>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <SectionHeader
            title={"Expert Insights and News Stay Ahead with Us"}
            subtitle={"Latest Blogs"}
            className="lg:max-w-[600px]"
          />
          <p className="text-muted-foreground lg:max-w-[400px]">
            Explore expert insights,{" "}
            <span className="font-semibold text-foreground">
              industry trends
            </span>
            , and the latest digital news to keep your business informed and
            ahead of the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mt-12">
          {blogPostsRes.data?.map((blog) => (
            <BlogPostCard variant="vertical" data={blog} key={blog.id} />
          ))}
        </div>
      </CommonMotionBox>
    </section>
  );
};

export default LatestBlogs;
