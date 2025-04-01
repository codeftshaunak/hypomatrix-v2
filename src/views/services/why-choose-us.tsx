import img from "@/assets/about1.jpg";
import SectionHeader from "@/components/common/section-header";
import Image from "next/image";
import StatsSection from "../about/hero/stats";

const WhyChooseUs = () => {
  return (
    <section className="container py-[130px] grid grid-cols-1 lg:grid-cols-3 gap-y-12 max-xl:gap-x-32">
      <div className="col-span-1 lg:col-span-2">
        <SectionHeader
          subtitle={"Why Choose Us"}
          title={"Your Trusted Partner for Success & Innovation"}
          description={`At Hypomatrix, we specialize in delivering strategic growth
          solutions tailored to elevate your business to new heights. By
          combining innovative strategies, data-driven insights, and creativity.`}
          className="mb-10 max-w-[600px]"
        />
        <StatsSection />
      </div>

      <div className="col-span-1 lg:col-span-1">
        <div className="aspect-square relative max-w-[500px] lg:ml-auto">
          <Image src={img} alt="Carousel Image" fill className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
