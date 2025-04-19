import PageHeader from "@/components/common/page-header";
import SectionHeader from "@/components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";
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
    <div className="px-3">
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
      <div className="container md:py-[130px] py-[50px]">
        <SectionHeader
          title={"Answers at Your Fingertips"}
          subtitle={"FAQ"}
          className="mb-16"
        />
        <CommonMotionBox>
          <div className="grid lg:grid-cols-3 md:gap-y-20 gap-y-8 gap-x-8 ">
            <div className="lg:col-span-2">
              <FAQ />
            </div>
            <div className="space-y-8">
              <ContactSection />
              <BannerSection />
            </div>
          </div>
        </CommonMotionBox>
      </div>
    </div>
  );
};

export default FaqView;
