import ProjectCard from "@/components/cards/project-card";
import { cn } from "@/lib/utils";
import { getProjects } from "@/services/apis/project";
import Container from "./container";

export default async function ProjectsGallery() {
  const projectsRes = await getProjects();

  return (
    <section className="md:py-[130px] pb-[50px] pt-[25px] container px-4 md:px:0">
      <Container>
        {projectsRes.data?.map((project, index) => (
          <div
            key={index}
            className={cn("w-full aspect-square", {
              "aspect-[4/3]": project.cardSize === "wide",
              "aspect-[3/4]": project.cardSize === "tall",
            })}
          >
            <ProjectCard data={project} variant="cover" />
          </div>
        ))}
      </Container>
    </section>
  );
}
