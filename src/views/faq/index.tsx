import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import FAQ from "./faq-section";

type Props = {
  page: TPage;
};

const FaqView = (props: Props) => {
  const { page } = props;
  return (
    <>
      <PageHeader
        title={page.title}
        links={[
          {
            title: "FAQ",
            href: paths.faq,
          },
        ]}
        description={page.description}
      />
      <FAQ />
    </>
  );
};

export default FaqView;
