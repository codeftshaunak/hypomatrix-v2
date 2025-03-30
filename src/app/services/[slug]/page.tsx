import { getService, getServices } from "@/services/apis/service";
import ServiceDetailsView from "@/views/service-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const ServiceDetailsPage = async (props: Props) => {
  const { slug } = await props.params;
  const serviceRes = await getService(slug);

  console.log(serviceRes);

  if (!serviceRes.data) {
    notFound();
  }

  return (
    <>
      <ServiceDetailsView service={serviceRes.data} />
    </>
  );
};

export default ServiceDetailsPage;

export async function generateStaticParams() {
  const servicesRes = await getServices();

  if (!servicesRes.data) {
    return [];
  }

  return servicesRes.data.map((service) => ({
    slug: service.slug,
  }));
}
