import { projectPage } from "@/db/pages";
import ProjectsView from "@/views/projects";

type Props = {};

const PortfolioPage = (props: Props) => {
  return (
    <>
      <ProjectsView page={projectPage} />
    </>
  );
};

export default PortfolioPage;
