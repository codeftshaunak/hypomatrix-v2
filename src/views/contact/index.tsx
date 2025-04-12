import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import FormSection from "./form-section";
import InfoSection from "./info-section";
import MapSection from "./map-section";

type Props = {
  page: TPage;
};

const ContactView = (props: Props) => {
  const { page } = props;
  return (
    <>
      <PageHeader
        title={page.title}
        links={[
          {
            title: "Contact",
            href: paths.contact,
          },
        ]}
        description={page.description}
      />
      <div className="container md:py-[130px] py-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 gap-x-16 xl:gap-x-32">
          <div className="lg:col-span-2">
            <InfoSection />
          </div>
          <div className="lg:col-span-3">
            <FormSection />
          </div>
        </div>
      </div>
      <MapSection />
    </>
  );
};

export default ContactView;
