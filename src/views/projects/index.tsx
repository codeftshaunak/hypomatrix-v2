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
    <div className="px-3">
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
    </div>
  );
};

export default ProjectsView;
