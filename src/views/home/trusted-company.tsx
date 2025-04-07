import SectionHeader from "@/components/common/section-header";
import { MotionBox } from "@/lib/motion/box";
import { getClients } from "@/services/apis/client";
import Image from "next/image";

export default async function TrustedCompanySection() {
  const clientsRes = await getClients();
  return (
    <section className="container pb-[130px] flex flex-col xl:flex-row xl:items-center justify-between gap-y-[60px]">
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container pb-[130px] flex flex-col xl:flex-row xl:items-center justify-between gap-y-[60px]"
      >
        {/* Left Side Content */}
        <SectionHeader
          subtitle={"Company"}
          title={"Trusted Our Company"}
          description={
            <>
              <span className="text-foreground font-semibold">HypoMatrix </span>{" "}
              is a digital creative agency specializing in delivering
              cutting-edge solutions that redefine innovation and elevate brands
              to new heights. 🚀{" "}
            </>
          }
          className="max-w-[500px]"
        />

        {/* Right Side - Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {clientsRes.data?.map((item, index) => {
            if (!item?.logo?.url) return null;

            return (
              <div
                className="border flex justify-center items-center h-[100px] xl:px-10"
                key={index}
              >
                <Image
                  src={item.logo.url}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="!max-w-[100px] !w-full !h-auto"
                />
              </div>
            );
          })}
        </div>
      </MotionBox>
    </section>
  );
}
