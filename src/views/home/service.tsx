import ServiceCard from "@/components/cards/service-card";
import SectionHeader from "@/components/common/section-header";
import { getServices } from "@/services/apis/service";

export default async function Services() {
  const servicesRes = await getServices();

  return (
    <section className="container pb-[130px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-16">
        <SectionHeader
          title={
            <>
              Innovative Services That <br /> Elevate Your Brand
            </>
          }
          subtitle="Our Service"
          className="flex-1"
        />
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">
            We are a digital creative agency
          </span>{" "}
          with <br /> 25 years of experience, specializing in <br /> delivering
          cutting-edge solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {servicesRes.data?.map((item, index) => (
          <div key={item.id}>
            <ServiceCard
              data={item}
              className="h-full lg:h-auto max-lg:!mt-0"
              style={{ marginTop: index * 48 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
