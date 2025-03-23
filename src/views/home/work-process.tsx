import WorkStepCard from "@/components/cards/work-step-card";
import SectionHeader from "@/components/common/section-header";
import { workSteps } from "@/db/work-steps";

function ProcessSection() {
  return (
    <section className="container">
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

      <div className="mt-20">
        <div className="w-full aspect-[2/1] bg-gray-600/30 rounded-lg flex items-center justify-center relative">
          <p className="text-gray-400 text-3xl font-light">1605 × 800</p>
          <div className="absolute right-6 bottom-6 bg-primary text-black font-bold py-3 px-6 rounded-md flex flex-col items-center">
            <span className="text-4xl">15k</span>
            <span className="block text-xs">Completed Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
