import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TMember } from "@/types/cms/team";
import JoinTeamSection from "../home/join-team";
import UserProfile from "./user-profile";

type Props = {
  member: TMember;
};

const TeamDetailsView = (props: Props) => {
  const { member } = props;
  return (
    <>
      <PageHeader
        title={"Team Details"}
        description={
          member.title ||
          "Meet the passionate minds behind HypoMatrix — a team of innovators, developers, and strategists dedicated to turning bold ideas into impactful solutions."
        }
        links={[
          { title: "Team", href: paths.team.root },
          { title: "Details", href: paths.team.details(member.slug) },
        ]}
      />
      <div className="flex flex-col gap-y-[80px] md:gap-y-[180px] px-2 md:px:0">
        <UserProfile member={member} />
        {/* <WhyChooseUs /> */}
        <JoinTeamSection />
      </div>
    </>
  );
};

export default TeamDetailsView;
