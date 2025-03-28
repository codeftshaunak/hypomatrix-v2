import ProjectCard from "@/components/cards/project-card";
import { projects } from "@/db/projects";
import { cn } from "@/lib/utils";
import Container from "./container";

export default function ProjectsGallery() {
  return (
    <section className="py-[130px] container">
      <Container>
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn("w-full aspect-square", {
              "aspect-[4/3]": project.size === "wide",
              "aspect-[3/4]": project.size === "tall",
            })}
          >
            <ProjectCard data={project} variant="cover" />
          </div>
        ))}
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn("w-full aspect-square", {
              "aspect-[4/3]": project.size === "wide",
              "aspect-[3/4]": project.size === "tall",
            })}
          >
            <ProjectCard data={project} variant="cover" />
          </div>
        ))}
      </Container>
    </section>
  );
}
