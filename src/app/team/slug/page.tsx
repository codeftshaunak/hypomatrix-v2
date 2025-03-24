import { members } from "@/db/team";
import TeamDetailsView from "@/views/team-details";

const TeamDetailsPage = () => {
  return (
    <>
      <TeamDetailsView member={members[0]} />
    </>
  );
};

export default TeamDetailsPage;
