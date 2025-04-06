import WorkStepCard from "@/components/cards/work-step-card";
import SectionHeader from "@/components/common/section-header";
import { workSteps } from "@/db/work-steps";
import { MotionBox } from "@/lib/motion/box";
import { getWebsite } from "@/services/apis/website";

function ProcessSection() {
  const WorkStep = getWebsite();
  return (
    <section className="container pb-[130px]">
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
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
      </MotionBox>
    </section>
  );
}

export default ProcessSection;
