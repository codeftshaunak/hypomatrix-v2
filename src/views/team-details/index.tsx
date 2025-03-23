import React from "react";
import UserProfile from "./user-profile";
import Experience from "./experience";
import CommonCard from "@/components/common/common-card";

const TeamDetailsView = () => {
  return (
    <div>
      <CommonCard
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
