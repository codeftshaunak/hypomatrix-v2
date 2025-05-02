import BgGridEffect from "@/components/common/bg-grid-effect";
import Hero from "./sections/hero";
import LatestArticles from "./sections/latest-article";
import ProjectsSection from "./sections/project";
import Services from "./sections/service";
import TeamSection from "./sections/team";
import TestimonialsSection from "./sections/testimonials";
import TrustedCompanySection from "./sections/trusted-company";
import ProcessSection from "./sections/work-process";

const HomeView = () => {
  return (
    <div className="px-2">
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
