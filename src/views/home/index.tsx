import { AwardsSection } from "./awards";
import Hero from "./hero";
import LatestArticles from "./latest-article";
import { ProjectsSection } from "./project";
import Services from "./service";
import { TeamSection } from "./team";
import { TestimonialsSection } from "./testimonials";
import TrustedCompanySection from "./trusted-company";
import ProcessSection from "./work-process";

const HomeView = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ProjectsSection />
      <ProcessSection />
      <TrustedCompanySection />
      <TeamSection />
      <TestimonialsSection />
      <AwardsSection />
      <LatestArticles />
    </div>
  );
};

export default HomeView;
