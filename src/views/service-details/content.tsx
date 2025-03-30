import StatCard from "@/components/cards/stat-card";
import SectionHeader from "@/components/common/section-header";
import { Separator } from "@/components/ui/separator";
import { TService } from "@/types/cms/service";
import Image from "next/image";

type Props = {
  service: TService;
};

const ContentSection = (props: Props) => {
  const { service } = props;
  return (
    <section className="py-[130px] relative overflow-hidden">
      <div className="absolute left-0 -bottom-[200px] md:-bottom-[300px] w-full h-full bg-card -z-[1] " />
      <div className="container">
        <div className="relative w-full aspect-[2.58]">
          <Image
            src={service.thumbnail.url}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
        {/* Content Section */}
        <div className="flex flex-col gap-10 lg:flex-row justify-between w-full mt-16">
          <div>
            <SectionHeader
              subtitle={"Description"}
              title={"Success Through Client Experiences"}
            />

            <div className="flex gap-10 mt-12 items-center flex-wrap">
              <StatCard
                count={`${service.completeProjects}+`}
                title={"Projects Completed"}
              />
              <Separator orientation="vertical" className="!h-[80px]" />
              <StatCard
                count={`${service.successRate}+`}
                title={"Satisfaction Clients"}
              />
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: service.content.html }}
            className="prose prose-invert text-muted-foreground"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
