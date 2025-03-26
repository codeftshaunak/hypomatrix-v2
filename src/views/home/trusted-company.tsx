import SectionHeader from "@/components/common/section-header";
import { companies } from "@/db/companies";
import Image from "next/image";

export default function TrustedCompanySection() {
  return (
    <section className="container pb-[130px] flex flex-col xl:flex-row xl:items-center justify-between gap-y-[60px]">
      {/* Left Side Content */}
      <SectionHeader
        subtitle={"Company"}
        title={"Trusted Our Company"}
        description={
          <>
            <span className="text-foreground font-semibold">
              We are a digital Creative agency
            </span>{" "}
            with 25 years of experience, specializing in delivering cutting-edge{" "}
          </>
        }
        className="max-w-[500px]"
      />

      {/* Right Side - Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {companies.map((item, index) => (
          <div
            className="border flex justify-center items-center h-[100px] xl:px-10"
            key={index}
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={100}
              height={100}
              className="!max-w-[100px] !w-full !h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
