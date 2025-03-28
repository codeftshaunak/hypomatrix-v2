import React from "react";
import BlogDetails from "./blog-details";
import PageHeader from "@/components/common/page-header";
import { TPage } from "@/types/cms/page";
import paths from "@/router/paths";

type Props = {
  page: TPage;
};

const BlogDetailsView = (props: Props) => {
  const { page } = props;
  return (
    <div>
      <PageHeader
        title="Blog Details"
        description={page.description}
        links={[
          {
            title: "Blog Details",
            href: paths.blog.root,
          },
        ]}
      />
      <BlogDetails />
    </div>
  );
};

export default BlogDetailsView;
