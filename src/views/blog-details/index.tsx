import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import CategoriesSection from "../blog/categories-section";
import LatestPostSection from "../blog/latest-post-section";
import BlogDetails from "./details-section";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container py-12">
        <div className="lg:col-span-2 space-y-12">
          <BlogDetails />
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
