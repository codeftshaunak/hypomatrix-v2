import ProjectCard from "@/components/cards/project-card";
import SectionHeader from "@/components/common/section-header";
import { MotionBox } from "@/components/motion/box";
import { Button } from "@/components/ui/button";
import paths from "@/router/paths";
import { getFeaturedProjects } from "@/services/apis/project";
import Link from "next/link";

async function ProjectsSection() {
  const projectsRes = await getFeaturedProjects(true);
  return (
    <section id="projects" className="container pb-[130px]">
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
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
      </MotionBox>
    </section>
  );
}

export default ProjectsSection;
