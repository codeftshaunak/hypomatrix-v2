import ServiceStepCard from "@/components/cards/service-step-card";
import { TServiceStep } from "@/types/cms/service";

type Props = {
  steps: TServiceStep[];
};

const StepsSection = (props: Props) => {
  const { steps } = props;

  return (
    <section className="container py-[130px] grid min-[400px]:grid-cols-2 lg:grid-cols-4 gap-y-16">
      {steps.map((step, index) => (
        <ServiceStepCard data={step} index={index + 1} />
      ))}
    </section>
  );
};

export default StepsSection;
