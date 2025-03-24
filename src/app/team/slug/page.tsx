import { team } from "@/db/team";
import TeamDetailsView from "@/views/team-details";

const TeamDetailsPage = () => {
  return (
    <>
      <TeamDetailsView member={team[0]} />
    </>
  );
};

export default TeamDetailsPage;
