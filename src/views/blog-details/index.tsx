import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import CategoriesSection from "../blog/categories-section";
import LatestPostSection from "../blog/latest-post-section";
import GridSection from "./grid-section";
import HeroSection from "./hero-section";
import SocialsSection from "./socials-section";
import TagsSection from "./tags-section";
import TestimonialSection from "./testimonial-section";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 gap-x-12 container py-[130px]">
        <div className="lg:col-span-2 space-y-12">
          <HeroSection post={post} />
          <div
            className="prose prose-invert text-muted-foreground w-full max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
          {/* <TestimonialSection /> */}
          {/* <GridSection /> */}

          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center py-8 px-6 border-t gap-y-10">
            <TagsSection tags={post.tags} />
            <SocialsSection />
          </div>
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
