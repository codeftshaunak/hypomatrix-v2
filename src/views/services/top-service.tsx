import SectionHeader from "@/components/common/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { getServices } from "@/services/apis/service";
import Image from "next/image";

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
          <Card key={service.id}>
            <CardContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center">
              <div className="lg:row-span-2 xl:row-span-1 mb-5 lg:mb-0">
                <div className="w-full max-w-[300px] h-28 relative">
                  <Image
                    src={service.thumbnail.url}
                    alt={service.title}
                    fill
                    className="rounded-3xl lg:rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-2 xl:mb-0">
                <h3 className="text-heading-3 lg:text-heading-2 font-heading font-bold ">
                  {service.category}
                </h3>
                <h4 className="text-heading-6 lg:text-heading-4 font-medium text-muted-foreground">
                  {service.title}
                </h4>
              </div>
              <div>
                <p className="text-body text-muted-foreground ml-auto">
                  {service.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
