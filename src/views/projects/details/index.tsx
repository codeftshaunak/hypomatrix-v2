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
          project.pageTitle ||
          "We build powerful, scalable platforms tailored to real-world business needs. "
        }
        links={[
          { title: "Works", href: paths.works.root },
          { title: "Details", href: paths.works.details(project.slug) },
        ]}
      />
      <DetailsSection project={project} />
    </>
  );
};

export default ProjectDetailsView;
