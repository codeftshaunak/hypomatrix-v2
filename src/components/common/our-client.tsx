import Image from "next/image";
import CommonMotionBox from "../../lib/motion/common-motion";
import SectionHeader from "./section-header";
import { getCompany } from "@/services/apis/company";

const OurClient = async () => {
  const companyRes = await getCompany();

  return (
    <section className="md:pb-[130px] pb-[60px] px-6 text-center">
      <CommonMotionBox>
        <SectionHeader
          title={"Trusted Industry Leader"}
          subtitle={"Our Client"}
          className="md:mb-[100px] mb-[50px] max-w-2xl mx-auto"
          align="center"
        />

        <div className="flex justify-center gap-6 flex-wrap">
          {companyRes.data?.map((item, index) => {
            if (!item?.logo?.url) return null;

            return (
              <div
                key={index}
                className="size-36 sm:size-52 bg-card rounded-full flex items-center justify-center"
              >
                <Image
                  src={item.logo.url}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[100px] sm:w-[160px] !h-auto brightness-0 invert-100"
                />
              </div>
            );
          })}
        </div>
      </CommonMotionBox>
    </section>
  );
};

export default OurClient;
