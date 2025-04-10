import { getMembers } from "@/services/apis/member";
import TeamCarousel from "./carousel";

async function TeamSection() {
  const membersRes = await getMembers("order_ASC");

  return <TeamCarousel members={membersRes.data || []} />;
}

export default TeamSection;
