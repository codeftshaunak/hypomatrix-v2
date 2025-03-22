import React from "react";
import { TeamSection } from "./our-team";
import JoinTeamSection from "./join-team";
import CommonCard from "@/components/common/common-card";

const TeamView = () => {
  return (
    <div>
      <CommonCard title="Our Team" link="team" text="Team" />
      <TeamSection />
      <JoinTeamSection />
    </div>
  );
};

export default TeamView;
