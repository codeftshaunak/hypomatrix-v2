import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { MotionBox } from "../motion/box";

type Props = {
  subtitle: ReactNode;
  title: ReactNode;
  className?: string;
  description?: ReactNode;
  align?: "center" | "left" | "right";
};

const SectionHeader: React.FC<Props> = (props) => {
  const { subtitle, title, className, description, align = "left" } = props;

  return (
    <div
      className={cn(
        className,
        align === "center" ? "text-center" : "",
        align === "right" ? "text-right" : ""
      )}
    >
      <h3
        className={cn(
          "text-body flex items-center gap-3 mb-4",
          align === "center" ? "justify-center" : "",
          align === "right" ? "justify-end" : ""
        )}
      >
        {(align === "center" || align === "right") && (
          <div className="relative">
            <div className="h-px w-16 bg-foreground" />
            <div className="size-2 bg-foreground absolute right-0 top-1/2 -translate-y-1/2 rotate-45" />
          </div>
        )}
        {subtitle}
        {(align === "center" || align === "left") && (
          <div className="relative">
            <div className="h-px w-16 bg-foreground" />
            <div className="size-2 bg-foreground absolute left-0 top-1/2 -translate-y-1/2 rotate-45" />
          </div>
        )}
      </h3>
      <MotionBox
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl sm:text-heading-2 font-heading font-bold">
          {title}
        </h2>
      </MotionBox>

      {description && (
        <p className="text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
