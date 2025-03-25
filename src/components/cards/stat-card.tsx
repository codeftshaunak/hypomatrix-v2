import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  title: ReactNode;
  count: ReactNode;
};

const StatCard = (props: Props) => {
  const { className, title, count } = props;
  return (
    <div className={cn(className)}>
      <h3 className="text-heading-2 font-bold text-primary font-heading mb-2">
        {count}
      </h3>
      <p className="text-muted-foreground">{title}</p>
    </div>
  );
};

export default StatCard;
