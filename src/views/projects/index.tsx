import React from "react";
import ProjectsGallery from "./project-gallery";
import PageHeader from "@/components/common/page-header";
import { TPage } from "@/types/cms/page";
import paths from "@/router/paths";

type Props = {
  page: TPage;
};

const ProjectsView = (props: Props) => {
  const { page } = props;
  return (
    <div>
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
