import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import Hero from "./hero";
import HowWeAre from "./how-we";
import { TeamSection } from "./team";
import { TestimonialsSection } from "./testimonials";

const AboutView = () => {
  return (
    <>
      <PageHeader title="About Us" link="about" text="About Us" />
      <Hero />
      <HowWeAre />
      <TeamSection />
      <TestimonialsSection />
      <OurClient />
    </>
  );
};

export default AboutView;
