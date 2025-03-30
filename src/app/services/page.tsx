import { getPage } from "@/services/apis/page";
import ServicesView from "@/views/services";
import { notFound } from "next/navigation";

const ServicesPage = async () => {
  const pageRes = await getPage("services");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <ServicesView page={pageRes.data} />
    </>
  );
};

export default ServicesPage;
