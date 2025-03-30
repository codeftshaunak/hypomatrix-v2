import { servicesPage } from "@/db/pages";
import { getServices } from "@/services/apis/service";
import ServicesView from "@/views/services";

const ServicesPage = async () => {
  const services = await getServices();

  return (
    <>
      <ServicesView page={servicesPage} />
    </>
  );
};

export default ServicesPage;
