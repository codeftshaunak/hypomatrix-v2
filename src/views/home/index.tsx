import BgGridEffect from "@/components/common/bg-grid-effect";
import Hero from "./hero";
import LatestArticles from "./latest-article";
import ProjectsSection from "./project";
import Services from "./service";
import TeamSection from "./team";
import TestimonialsSection from "./testimonials";
import TrustedCompanySection from "./trusted-company";
import ProcessSection from "./work-process";
import ProjectsView from "../projects";
import ProjectDetailsView from "../project-details";

const HomeView = () => {
  return (
    <>
      <BgGridEffect />
      <Hero />
      <Services />
      <ProjectsSection />
      <ProcessSection />
      <TrustedCompanySection />
      <TeamSection />
      <TestimonialsSection />
      <LatestArticles />
      <ProjectsView />
      <ProjectDetailsView />
    </>
  );
};

export default HomeView;
