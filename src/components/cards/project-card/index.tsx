import { TProject } from "@/types/cms/project";
import CoverCard from "./cover-card";
import DefaultCard from "./default-card";

export type ProjectCardProps = {
  data: TProject;
  className?: string;
  variant?: "default" | "cover";
};

const ProjectCard = (props: ProjectCardProps) => {
  const { variant = "default" } = props;

  if (variant === "cover") {
    return <CoverCard {...props} />;
  }

  return <DefaultCard {...props} />;
};

export default ProjectCard;
