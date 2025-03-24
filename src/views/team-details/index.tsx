import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TTeam } from "@/types/cms/team";
import Experience from "./experience";
import UserProfile from "./user-profile";

type Props = {
  member: TTeam;
};

const TeamDetailsView = (props: Props) => {
  const { member } = props;
  return (
    <>
      <PageHeader
        title={member.name}
        description={member.role}
        links={[
          { title: "Team", href: paths.team.root },
          { title: "Details", href: paths.team.details(member.slug) },
        ]}
      />
      <UserProfile />
      <Experience />
    </>
  );
};

export default TeamDetailsView;
