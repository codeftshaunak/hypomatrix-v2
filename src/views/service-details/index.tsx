import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TService } from "@/types/cms/service";
import ClientSuccessSection from "./client-success";
import StepsSection from "./steps";

type Props = {
  service: TService;
};

const ServiceDetailsView = (props: Props) => {
  const { service } = props;
  return (
    <div>
      <PageHeader
        title={service.title}
        description={service.description}
        links={[
          { title: "Services", href: paths.services.root },
          { title: "Details", href: paths.services.details(service.slug) },
        ]}
      />
      <ClientSuccessSection />
      <StepsSection />
      <OurClient />
    </div>
  );
};

export default ServiceDetailsView;
