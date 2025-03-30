import { getPage } from "@/services/apis/page";
import TeamView from "@/views/team";
import { notFound } from "next/navigation";

const TeamPage = async () => {
  const pageRes = await getPage("team");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <TeamView page={pageRes.data} />
    </>
  );
};

export default TeamPage;
