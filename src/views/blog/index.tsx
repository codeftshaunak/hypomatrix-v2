import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TBlogPost } from "@/types/cms/blog";
import { TPage } from "@/types/cms/page";
import { Suspense } from "react";
import CategoriesSection from "./categories-section";
import LatestPostSection from "./latest-post-section";
import PaginationSection from "./pagination-section";
import PostsWithPagination from "./posts-with-pagination";
import PostsWrapper from "./posts-wrapper";

type Props = {
  page: TPage;
  posts: TBlogPost[];
};

const BlogView = (props: Props) => {
  const { page, posts } = props;

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        links={[
          {
            title: "Blog",
            href: paths.blog.root,
          },
        ]}
      />
      <div className="container md:py-[130px] py-[50px] px-5 md:px:0">
        <div className="grid grid-cols-1 xl:grid-cols-3 md:gap-y-16 gap-x-8">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-16 @container/feed">
            <Suspense fallback={<PostsWrapper posts={posts} />}>
              <PostsWithPagination limit={6} posts={posts} />
              <PaginationSection limit={6} total={posts.length} />
            </Suspense>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CategoriesSection />
            <LatestPostSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogView;
