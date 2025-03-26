import { projectPage } from "@/db/pages";
import ProjectsView from "@/views/projects";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <ProjectsView page={projectPage} />
    </div>
  );
};

export default index;
