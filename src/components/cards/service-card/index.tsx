import { TService } from "@/types/cms/service";
import DefaultCard from "./default-card";
import HorizontalCard from "./horizontal-card";

export interface ServiceCardProps extends React.ComponentProps<"article"> {
  data: TService;
  variant?: "default" | "horizontal";
}

function ServiceCard(props: ServiceCardProps) {
  const { variant = "default" } = props;

  if (variant === "horizontal") {
    return <HorizontalCard {...props} />;
  }

  return <DefaultCard {...props} />;
}

export default ServiceCard;
