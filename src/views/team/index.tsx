import PageHeader from "@/components/common/page-header";
import JoinTeamSection from "./join-team";
import { TeamSection } from "./our-team";

const TeamView = () => {
  return (
    <>
      <PageHeader title="Our Team" link="team" description="Team" />
      <TeamSection />
      <JoinTeamSection />
    </>
  );
};

export default TeamView;
