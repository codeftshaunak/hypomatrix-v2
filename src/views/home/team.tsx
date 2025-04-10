import MemberCard from "@/components/cards/member-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MotionBox } from "@/lib/motion/box";
import { getMembers } from "@/services/apis/member";
import SectionHeader from "../../components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";

async function TeamSection() {
  const membersRes = await getMembers();
  return (
    <section id="team" className="pb-[130px] container">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Our Team"
          title="Meet Our Talented Skillful Team!"
          className="max-w-[500px] mb-[60px]"
        />

        <Carousel>
          <CarouselContent className="-ml-6 mb-16">
            {membersRes.data?.map((member) => (
              <CarouselItem
                key={member.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-6"
              >
                <MemberCard data={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="static" />
          <CarouselNext className="static ml-2" />
        </Carousel>
      </CommonMotionBox>
    </section>
  );
}

export default TeamSection;
