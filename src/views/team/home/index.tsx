import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import JoinTeamSection from "./join-team";
import { TeamSection } from "./our-team";

type Props = {
  page: TPage;
};

const TeamView = (props: Props) => {
  const { page } = props;

  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        links={[
          {
            title: "Team",
            href: paths.team.root,
          },
        ]}
      />
      <TeamSection />
      <JoinTeamSection />
    </>
  );
};

export default TeamView;
