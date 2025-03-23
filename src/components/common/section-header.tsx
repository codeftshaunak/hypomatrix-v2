import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  subtitle: ReactNode;
  title: ReactNode;
  className?: string;
};

const SectionHeader: React.FC<Props> = (props) => {
  const { subtitle, title, className } = props;

  return (
    <div className={cn(className)}>
      <h3 className="text-body flex items-center gap-3 mb-4">
        {subtitle}
        <div className="relative">
          <div className="h-px w-16 bg-foreground" />
          <div className="size-2 bg-foreground absolute left-0 top-1/2 -translate-y-1/2 rotate-45" />
        </div>
      </h3>
      <h2 className="text-heading-2 font-heading font-bold">{title}</h2>
    </div>
  );
};

export default SectionHeader;
