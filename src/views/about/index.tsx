import CommonCard from "@/components/common/common-card";
import React from "react";
import Hero from "./hero";
import HowWeAre from "./how-we";
import { TeamSection } from "./team";
import { TestimonialsSection } from "./testimonials";
import OurClient from "@/components/common/our-client";

const AboutView = () => {
  return (
    <div>
      <CommonCard title="About Us" link="about" text="About Us" />
      <Hero />
      <HowWeAre />
      <TeamSection />
      <TestimonialsSection />
      <OurClient />
    </div>
  );
};

export default AboutView;
