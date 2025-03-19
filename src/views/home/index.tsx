import Hero from "@/components/hero";
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
    </div>
  );
};

export default HomeView;
