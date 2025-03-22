import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import ClientSuccessSection from "./client-success";
import StepsSection from "./steps";

const ServiceDetailsView = () => {
  return (
    <div>
      <PageHeader
        title="Services Details"
        text="Services Details"
        link="service-details"
      />
      <ClientSuccessSection />
      <StepsSection />
      <OurClient />
    </div>
  );
};

export default ServiceDetailsView;
