import WorkStepCard from "@/components/cards/work-step-card";
import SectionHeader from "@/components/common/section-header";
import { MotionBox } from "@/lib/motion/box";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getWebsite } from "@/services/apis/website";

async function ProcessSection() {
  const websiteRes = await getWebsite();

  return (
    <section className="container pb-[50px] md:pb-[130px]">
      <CommonMotionBox>
        <SectionHeader
          subtitle="Working Process"
          title="The Process Behind the Magic Step by Step"
          className="mb-[100px] max-w-[700px] flex-1 lg:flex-none"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
          {websiteRes.data?.workSteps?.map((step, index) => (
            <WorkStepCard data={step} index={index + 1} key={index} />
          ))}
        </div>
      </CommonMotionBox>
    </section>
  );
}

export default ProcessSection;
