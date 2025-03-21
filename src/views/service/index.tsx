import CommonCard from "@/components/common/common-card";
import React from "react";
import WhyChooseUs from "./why-choose-us";
import OurServices from "./top-service";
import OurClient from "@/components/common/our-client";
import LatestBlogs from "./latest-blog";

const ServiceView = () => {
  return (
    <div>
      <CommonCard title="Our Services" text="Services" link="service" />
      <WhyChooseUs />
      <OurServices />
      <OurClient />
      <LatestBlogs />
    </div>
  );
};

export default ServiceView;
