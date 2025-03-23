import WorkStepCard from "@/components/cards/work-step-card";
import SectionHeader from "@/components/common/section-header";
import { workSteps } from "@/db/work-steps";

function ProcessSection() {
  return (
    <section className="container pb-[130px]">
      <SectionHeader
        subtitle="Working Proses"
        title="The Process Behind the Magic Step by Step"
        className="mb-[100px] max-w-[700px]"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
        {workSteps.map((step, index) => (
          <WorkStepCard data={step} index={index + 1} key={index} />
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
