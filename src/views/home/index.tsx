import { AwardsSection } from "@/components/awards";
import Hero from "@/components/hero";
import LatestArticles from "@/components/latest-article";
import { ProjectsSection } from "@/components/project";
import Services from "@/components/service";
import { TeamSection } from "@/components/team";
import { TestimonialsSection } from "@/components/testimonials";
import TrustedCompanySection from "@/components/trusted-company";
import ProcessSection from "@/components/work-process";

type Props = {};

const HomeView = (props: Props) => {
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
