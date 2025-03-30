import ServiceCard from "@/components/cards/service-card";
import SectionHeader from "@/components/common/section-header";
import { getServices } from "@/services/apis/service";

const OurServices = async () => {
  const servicesRes = await getServices();
  return (
    <section className="container pb-[130px]">
      <SectionHeader
        subtitle={"Our Services"}
        title={"Top Services We Offer"}
        align="center"
        className="mb-16"
      />

      <div className="space-y-4">
        {servicesRes.data?.map((service) => (
          <ServiceCard data={service} key={service.id} variant="horizontal" />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
