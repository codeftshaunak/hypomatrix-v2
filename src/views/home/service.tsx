import ServiceCard from "@/components/cards/service-card";
import SectionHeader from "@/components/common/section-header";
import { MotionBox } from "@/lib/motion/box";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getServices } from "@/services/apis/service";
import { Variants } from "framer-motion";

const containerVariants: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  hide: {},
};

const childVariants: Variants = {
  show: { opacity: 1, translateY: 0 },
  hide: { opacity: 0, translateY: 100 },
};

export default async function Services() {
  const servicesRes = await getServices();

  return (
    <section className="container md:pb-[130px] pb-[50px]">
      <CommonMotionBox>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-16 ">
          <SectionHeader
            title={<>Innovative Services That Elevate Your Brand</>}
            subtitle="Our Service"
            className="max-w-[700px] flex-1 lg:flex-none"
          />
          <p className="text-muted-foreground max-w-[350px]">
            <span className="font-semibold text-foreground">
              Boost your business{" "}
            </span>{" "}
            with our expert digital services, including innovative web
            development and targeted marketing solutions that drive results.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {servicesRes.data?.map((item, index) => (
            <MotionBox variants={childVariants} key={item.id}>
              <ServiceCard
                data={item}
                className="h-full lg:h-auto max-lg:!mt-0"
                style={{ marginTop: index * 48 }}
              />
            </MotionBox>
          ))}
        </div>
      </CommonMotionBox>
    </section>
  );
}
