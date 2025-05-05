import StatCard from "@/components/cards/stat-card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const StatsSection = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn("flex gap-6 sm:gap-12 items-center", className)}>
      <StatCard count={"08+"} title={"Trusted clients worldwide"} />
      <Separator orientation="vertical" className="!h-[80px]" />
      <StatCard count={"10+"} title={"Ideas turned into reality"} />
    </div>
  );
};

export default StatsSection;
