import React from "react";
import BlogCard from "./blog-card";
import PageHeader from "@/components/common/page-header";
import { TPage } from "@/types/cms/page";
import paths from "@/router/paths";
import Pagination from "@/components/blog-pagination";

type Props = {
  page: TPage;
};

const BlogCardView = (props: Props) => {
  const { page } = props;
  return (
    <div>
      <PageHeader
        title="Blog Cards"
        description={page.description}
        links={[
          {
            title: "Blog Cards",
            href: paths.blog.root,
          },
        ]}
      />
      <BlogCard />
    </div>
  );
};

export default BlogCardView;
