import Hero from "@/components/hero";
import { ProjectsSection } from "@/components/project";
import Services from "@/components/service";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <div>
      <Hero />
      <Services />
      <ProjectsSection />
    </div>
  );
};

export default HomeView;
