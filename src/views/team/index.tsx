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
    <div className="px-3">
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
    </div>
  );
};

export default TeamView;
