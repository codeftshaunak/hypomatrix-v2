import StatCard from "@/components/cards/stat-card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const StatsSection = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn("flex gap-12 items-center", className)}>
      <StatCard count={"240+"} title={"Projects success rate 99%"} />
      <Separator orientation="vertical" className="!h-[80px]" />
      <StatCard count={"23+"} title={"Award for digital innovation"} />
    </div>
  );
};

export default StatsSection;
