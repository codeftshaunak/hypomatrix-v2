import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const StatsSection = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn("flex gap-12 items-center", className)}>
      <div>
        <h3 className="text-heading-2 font-bold text-primary font-heading mb-2">
          240+
        </h3>
        <p className="text-muted-foreground">projects success rate 99%</p>
      </div>
      <Separator orientation="vertical" className="!h-[80px]" />
      <div>
        <h3 className="text-heading-2 font-bold text-primary font-heading mb-2">
          23+
        </h3>
        <p className="text-muted-foreground">Award for digital innovation</p>
      </div>
    </div>
  );
};

export default StatsSection;
