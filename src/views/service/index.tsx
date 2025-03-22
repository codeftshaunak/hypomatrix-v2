import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import LatestBlogs from "./latest-blog";
import OurServices from "./top-service";
import WhyChooseUs from "./why-choose-us";

const ServiceView = () => {
  return (
    <div>
      <PageHeader title="Our Services" text="Services" link="service" />
      <WhyChooseUs />
      <OurServices />
      <OurClient />
      <LatestBlogs />
    </div>
  );
};

export default ServiceView;
