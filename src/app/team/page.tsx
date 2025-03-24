import { teamPage } from "@/db/pages";
import TeamView from "@/views/team";

const TeamPage = () => {
  return (
    <>
      <TeamView page={teamPage} />
    </>
  );
};

export default TeamPage;
