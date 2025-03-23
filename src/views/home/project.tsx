import ProjectCard from "@/components/cards/project-card";
import SectionHeader from "@/components/common/section-header";
import { NeonButton } from "@/components/ui/neon-button";
import { projects } from "@/db/projects";

function ProjectsSection() {
  return (
    <section id="projects" className="container pb-[130px]">
      <SectionHeader
        subtitle="Complete Work"
        title="Creative Projects We've Delivered To Client"
        className="max-w-[700px] mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard data={project} key={project.id} />
        ))}
      </div>

      <div className="mt-12 text-center text-white">
        <NeonButton className="text-black bg-lime-400 cursor-pointer">
          View All Projects
        </NeonButton>
      </div>
    </section>
  );
}

export default ProjectsSection;
