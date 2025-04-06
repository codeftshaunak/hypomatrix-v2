import ProjectCard from "@/components/cards/project-card";
import CommonMotionBox from "@/lib/motion/common-motion";
import { cn } from "@/lib/utils";
import { getProjects } from "@/services/apis/project";
import Container from "./container";

export default async function ProjectsGallery() {
  const projectsRes = await getProjects();

  return (
    <section className="py-[130px] container">
      <CommonMotionBox>
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
      </CommonMotionBox>
    </section>
  );
}
