import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import BlogSection from "./blog";

type Props = {
  page: TPage;
};

const BlogView = (props: Props) => {
  const { page } = props;
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
      <BlogSection />
    </>
  );
};

export default BlogView;
