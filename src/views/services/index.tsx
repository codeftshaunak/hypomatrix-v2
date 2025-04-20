import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import LatestBlogs from "./latest-blog";
import OurServices from "./top-service";
import WhyChooseUs from "./why-choose-us";

type Props = {
  page: TPage;
};

const ServicesView = (props: Props) => {
  const { page } = props;

  return (
    <>
      <PageHeader
        title={page.title}
        links={[
          {
            title: "Services",
            href: paths.services.root,
          },
        ]}
        description={page.description}
      />
      <WhyChooseUs />
      <OurServices />
      <OurClient />
      <LatestBlogs />
    </>
  );
};

export default ServicesView;
