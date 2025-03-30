import { getMember, getMembers } from "@/services/apis/member";
import TeamDetailsView from "@/views/team-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const TeamDetailsPage = async (props: Props) => {
  const { slug } = await props.params;
  const memberRes = await getMember(slug);

  if (!memberRes.data) {
    notFound();
  }

  return (
    <>
      <TeamDetailsView member={memberRes.data} />
    </>
  );
};

export default TeamDetailsPage;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const dataRes = await getMembers();

  if (!dataRes.data) {
    return [];
  }

  return dataRes.data.map((item) => ({
    slug: item.slug,
  }));
}
