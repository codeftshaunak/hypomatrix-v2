import ServiceCard from "@/components/cards/service-card";
import SectionHeader from "@/components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getServices } from "@/services/apis/service";

const OurServices = async () => {
  const servicesRes = await getServices();
  return (
    <section className="container md:pb-[130px] pb-[50px]">
      <SectionHeader
        subtitle={"Our Services"}
        title={"Top Services We Offer"}
        align="center"
        className="md:mb-16 mb-10"
      />

      <CommonMotionBox>
        <div className="space-y-4">
          {servicesRes.data?.map((service) => (
            <ServiceCard data={service} key={service.id} variant="horizontal" />
          ))}
        </div>
      </CommonMotionBox>
    </section>
  );
};

export default OurServices;
