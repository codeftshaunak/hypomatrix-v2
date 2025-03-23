import TeamCard from "@/components/cards/team-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { team } from "@/db/team";
import SectionHeader from "../../components/common/section-header";

function TeamSection() {
  return (
    <section id="team" className="pb-[130px] container">
      <SectionHeader
        subtitle="Our Team"
        title="Meet Our Talented Skillful Team!"
        className="max-w-[500px] mb-[60px]"
      />

      <Carousel>
        <CarouselContent className="-ml-6">
          {team.map((member) => (
            <CarouselItem
              key={member.id}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-6"
            >
              <TeamCard data={member} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default TeamSection;
