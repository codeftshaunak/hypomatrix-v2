import WorkStepCard from "@/components/cards/work-step-card";
import SectionHeader from "@/components/common/section-header";
import CommonMotionBox from "@/lib/motion/common-motion";
import { getWebsite } from "@/services/apis/website";

const WorkingProcess = async () => {
  const websiteRes = await getWebsite();

  return (
    <section className="py-[130px] bg-card">
      <CommonMotionBox>
        <div className="container">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center mb-[100px]">
            <SectionHeader
              subtitle={"Working Process"}
              title={"We are leading Innovative marketing agency."}
            />

            <p className="text-muted-foreground max-w-xl">
              <strong className="text-foreground">
                Leading Innovation marketing agency
              </strong>{" "}
              We are a leading innovative marketing agency, specializing in
              creative solutions that drive business growth, enhance brand
              visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12">
            {websiteRes.data?.workSteps?.map((step, index) => (
              <WorkStepCard data={step} index={index + 1} key={index} />
            ))}
          </div>
        </div>
      </CommonMotionBox>
    </section>
  );
};

export default WorkingProcess;
