import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import ProjectsGallery from "./project-gallery";

type Props = {
  page: TPage;
};

const ProjectsView = (props: Props) => {
  const { page } = props;
  return (
    <>
      <PageHeader
        title={page.title}
        description={page.description}
        links={[
          {
            title: "Projects",
            href: paths.portfolio.root,
          },
        ]}
      />
      <ProjectsGallery />
    </>
  );
};

export default ProjectsView;
