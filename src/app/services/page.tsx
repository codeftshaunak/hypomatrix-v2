import { servicesPage } from "@/db/pages";
import ServicesView from "@/views/services";

const page = () => {
  return (
    <>
      <ServicesView page={servicesPage} />
    </>
  );
};

export default page;
