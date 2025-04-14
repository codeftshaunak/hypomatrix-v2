import PageHeader from "@/components/common/page-header";
import CommonMotionBox from "@/lib/motion/common-motion";
import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import CategoriesSection from "../blog/categories-section";
import LatestPostSection from "../blog/latest-post-section";
import HeroSection from "./hero-section";
import SocialsSection from "./socials-section";
import TagsSection from "./tags-section";

type Props = {
  post: TBlogPost;
};

const BlogDetailsView = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <PageHeader
        title={post.title}
        description={post.description}
        links={[
          {
            title: "Blog",
            href: paths.blog.root,
          },
          {
            title: "Details",
            href: paths.blog.details(post.slug),
          },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 container md:py-[130px] py-[50px]">
        <div className="lg:col-span-2 space-y-12">
          <HeroSection post={post} />
          <div
            className="prose prose-invert text-muted-foreground w-full max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
          {/* <TestimonialSection /> */}
          {/* <GridSection /> */}
          <CommonMotionBox>
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-8 px-6 border-t gap-y-10">
              <TagsSection tags={post.tags} />
              <SocialsSection
                url={
                  process.env.NEXT_PUBLIC_APP_URL +
                  paths.blog.details(post.slug)
                }
              />
            </div>
          </CommonMotionBox>
        </div>
        <div className="space-y-8">
          <CategoriesSection />
          <LatestPostSection />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsView;
