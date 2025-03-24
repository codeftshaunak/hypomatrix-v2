import { services } from "@/db/services";
import ServiceDetailsView from "@/views/service-details";

const ServiceDetailsPage = () => {
  return (
    <>
      <ServiceDetailsView service={services[0]} />
    </>
  );
};

export default ServiceDetailsPage;
