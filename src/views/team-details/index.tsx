import PageHeader from "@/components/common/page-header";
import Experience from "./experience";
import UserProfile from "./user-profile";

const TeamDetailsView = () => {
  return (
    <>
      <PageHeader title="Team Details" text="Team Details" link="#" />
      <UserProfile />
      <Experience />
    </>
  );
};

export default TeamDetailsView;
