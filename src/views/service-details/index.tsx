import CommonCard from "@/components/common/common-card";
import React from "react";
import ClientSuccessSection from "./client-success";
import StepsSection from "./steps";
import OurClient from "@/components/common/our-client";
import ProjectsSection from "./project";

const ServiceDetailsView = () => {
  return (
    <div>
      <CommonCard
        title="Services Details"
        text="Services Details"
        link="service-details"
      />
      <ClientSuccessSection />
      <StepsSection />
      <OurClient />
      <ProjectsSection />
    </div>
  );
};

export default ServiceDetailsView;
