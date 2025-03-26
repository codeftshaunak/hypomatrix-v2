import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TMember } from "@/types/cms/team";
import WhyChooseUs from "../services/why-choose-us";
import UserProfile from "./user-profile";

type Props = {
  member: TMember;
};

const TeamDetailsView = (props: Props) => {
  const { member } = props;
  return (
    <>
      <PageHeader
        title={"Team Details"}
        description={
          "Agenko empowers businesses with innovative strategies & creative agency solutions"
        }
        links={[
          { title: "Team", href: paths.team.root },
          { title: "Details", href: paths.team.details(member.slug) },
        ]}
      />
      <UserProfile member={member} />
      <WhyChooseUs />
    </>
  );
};

export default TeamDetailsView;
