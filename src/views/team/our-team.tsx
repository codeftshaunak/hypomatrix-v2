import MemberCard from "@/components/cards/member-card";
import SectionHeader from "@/components/common/section-header";
import { Separator } from "@/components/ui/separator";
import { members } from "@/db/team";
import { leadingZero } from "@/utils/number";
export function TeamSection() {
  return (
    <section id="team" className="py-[130px] container">
      <div className="flex flex-col mb-16 gap-y-6 md:flex-row md:items-center md:justify-between">
        <SectionHeader
          subtitle={"Our Team"}
          title={"Meet the Minds Behind the Mission"}
          className="max-w-[500px]"
        />
        <div className="flex gap-6 items-center">
          <p className="text-heading-2 font-heading font-medium">
            {leadingZero(members.length)}+
          </p>
          <Separator orientation="vertical" className="!h-[50px]" />
          <p className="text-body text-muted-foreground">
            PROFESSIONAL <br />
            MEMBERS
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {members.map((member, index) => (
          <MemberCard data={member} key={index} />
        ))}
      </div>
    </section>
  );
}
