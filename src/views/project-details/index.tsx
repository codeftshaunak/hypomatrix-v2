import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TProject } from "@/types/cms/project";
import DetailsSection from "./details-section";

type Props = {
  project: TProject;
};

const ProjectDetailsView = (props: Props) => {
  const { project } = props;
  return (
    <>
      <PageHeader
        title={"Project Details"}
        description={
          "Agenko empowers businesses with innovative strategies & creative agency solutions"
        }
        links={[
          { title: "Portfolio", href: paths.portfolio.root },
          { title: "Details", href: paths.portfolio.details(project.slug) },
        ]}
      />
      <DetailsSection project={project} />
    </>
  );
};

export default ProjectDetailsView;
