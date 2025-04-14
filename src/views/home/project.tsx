import ProjectCard from "@/components/cards/project-card";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { MotionBox } from "@/lib/motion/box";
import CommonMotionBox from "@/lib/motion/common-motion";
import paths from "@/router/paths";
import { getFeaturedProjects } from "@/services/apis/project";
import Link from "next/link";

async function ProjectsSection() {
  const projectsRes = await getFeaturedProjects(true);
  return (
    <section id="projects" className="container md:pb-[130px] pb-[50px]">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Complete Work"
          title="Creative Projects We've Delivered To Client"
          className="max-w-[700px] mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsRes.data?.map((project) => (
            <ProjectCard data={project} key={project.id} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size={"xl"}>
            <Link href={paths.portfolio.root}>View All Projects</Link>
          </Button>
        </div>
      </CommonMotionBox>
    </section>
  );
}

export default ProjectsSection;
