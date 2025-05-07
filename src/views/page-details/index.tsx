import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";

type Props = {
  page: TPage;
};

const PageDetailsView = (props: Props) => {
  const { page } = props;

  return (
    <>
      <PageHeader
        title={page.title}
        links={[{ title: page.title, href: paths.about }]}
        description={page.description}
      />
      {page.content && (
        <div className="container py-[50px] md:py-[130px] px-6 md:px-0">
          <div
            className="prose prose-invert max-w-4xl break-words"
            dangerouslySetInnerHTML={{ __html: page.content.html }}
          />
        </div>
      )}
    </>
  );
};

export default PageDetailsView;
