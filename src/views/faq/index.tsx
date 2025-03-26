import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import BannerSection from "./banner-section";
import ContactSection from "./contact-section";
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
      <div className="grid lg:grid-cols-3 gap-y-20 gap-x-8 container py-[130px]">
        <div className="lg:col-span-2">
          <FAQ />
        </div>
        <div className="space-y-8">
          <ContactSection />
          <BannerSection />
        </div>
      </div>
    </>
  );
};

export default FaqView;
