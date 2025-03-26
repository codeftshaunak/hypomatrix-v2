import { TPage } from "@/types/cms/page";
import BlogSection from "./blog";
import paths from "@/router/paths";
import PageHeader from "@/components/common/page-header";

type Props = {
  page: TPage;
};

const BlogView = (props: Props) => {
  const { page } = props;
  return (
    <div>
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
      <BlogSection />
    </div>
  );
};

export default BlogView;
