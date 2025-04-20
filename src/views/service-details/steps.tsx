import ServiceStepCard from "@/components/cards/service-step-card";
import { TServiceStep } from "@/types/cms/service";

type Props = {
  steps: TServiceStep[];
};

const StepsSection = (props: Props) => {
  const { steps } = props;

  return (
    <section className="container pb-[60px] lg:py-[130px] grid min-[500px]:grid-cols-2 lg:grid-cols-4 md:gap-y-16">
      {steps.map((step, index) => (
        <ServiceStepCard data={step} index={index + 1} key={index} />
      ))}
    </section>
  );
};

export default StepsSection;
