import BgGridEffect from "@/components/common/bg-grid-effect";
import Hero from "./hero";
import LatestArticles from "./latest-article";
import ProjectsSection from "./project";
import Services from "./service";
import TeamSection from "./team";
import TestimonialsSection from "./testimonials";
import TrustedCompanySection from "./trusted-company";
import ProcessSection from "./work-process";

const HomeView = () => {
  return (
    <div className="px-3">
      <BgGridEffect />
      <Hero />
      <Services />
      <ProjectsSection />
      <ProcessSection />
      <TrustedCompanySection />
      <TeamSection />
      <TestimonialsSection />
      <LatestArticles />
    </div>
  );
};

export default HomeView;
