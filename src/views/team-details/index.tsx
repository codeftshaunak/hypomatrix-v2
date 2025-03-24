import React from "react";
import UserProfile from "./user-profile";
import Experience from "./experience";
import PageHeader from "@/components/common/page-header";

const TeamDetailsView = () => {
  return (
    <div>
      <PageHeader
        link="team-details"
        text="Team Details"
        title="Team Details"
      />
      <UserProfile />
      <Experience />
    </div>
  );
};

export default TeamDetailsView;
