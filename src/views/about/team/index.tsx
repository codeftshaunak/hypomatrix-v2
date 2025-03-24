import TeamCard from "@/components/cards/member-card";
import SectionHeader from "@/components/common/section-header";
import { CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { members } from "@/db/team";
import CarouselContainer from "./carousel-container";

function TeamSection() {
  return (
    <section id="team" className="py-[130px]">
      <SectionHeader
        title={"Success Stories From Around the Globe"}
        subtitle={"Our Experts"}
        className="mb-[100px] max-w-2xl mx-auto"
        align="center"
      />

      <div className="min-[2000px]:container">
        <CarouselContainer>
          <CarouselContent className="-ml-6">
            {members.map((member) => (
              <CarouselItem
                key={member.id}
                className="basis-[75%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5 pl-6"
              >
                <TeamCard data={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </CarouselContainer>
      </div>
    </section>
  );
}

export default TeamSection;
