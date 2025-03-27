import { projects } from "@/db/projects";
import ProjectDetailsView from "@/views/project-details";

const ProjectDetailsPage = () => {
  return (
    <>
      <ProjectDetailsView project={projects[0]} />
    </>
  );
};

export default ProjectDetailsPage;
