import * as React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-green disabled:opacity-50",
          {
            "bg-neon-green text-black hover:shadow-[0_0_15px_rgba(92,255,68,0.7)]":
              variant === "default",
            "border border-neon-green text-neon-green hover:bg-neon-green hover:text-black":
              variant === "outline",
            "text-neon-green hover:bg-secondary hover:text-neon-green":
              variant === "ghost",
            "h-9 px-4 py-2 text-sm": size === "sm",
            "h-10 px-8 py-2": size === "default",
            "h-12 px-10 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
NeonButton.displayName = "NeonButton";

export { NeonButton };
