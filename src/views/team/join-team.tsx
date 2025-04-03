import img from "@/assets/Join Cercle.png";
import img1 from "@/assets/team-thumb1.jpg";
import CommonMotionBox from "@/components/motion/common-motion";
import Image from "next/image";

const JoinTeamSection: React.FC = () => {
  return (
    <CommonMotionBox>
      <section className="flex flex-col container lg:flex-row lg:items-center justify-between pb-[130px] gap-y-16">
        <div className="relative">
          <h2 className="text-heading-1 leading-none font-bold font-heading md:max-w-[500px] md:text-[100px] xl:text-[120px]">
            <span className="text-stroke text-stroke-muted-foreground text-transparent">
              Join Our
            </span>{" "}
            <span className="sm:ml-24 md:ml-28 xl:ml-36">Talented </span>
            Team
          </h2>
          <Image
            src={img}
            alt="image not found"
            width={80}
            className="spin-in animate-spin duration-7000 absolute top-1/2 left-0 -translate-y-1/2 md:w-[100px] xl:w-[130px] hidden sm:inline-block"
          />
        </div>

        <div className="flex items-center gap-6 relative">
          <Image
            src={img1}
            alt="image not found"
            width={140}
            className="rounded-tl-xl rounded-br-xl aspect-square xl:w-[200px]"
          />

          <div className="flex flex-col gap-6 shrink-0">
            <Image
              src={img1}
              alt="image not found"
              width={140}
              className="rounded-b-full aspect-square xl:w-[180px]"
            />

            <Image
              src={img1}
              alt="image not found"
              width={140}
              className="rounded-tl-xl rounded-br-xl aspect-square xl:w-[200px]"
            />
          </div>
        </div>
      </section>
    </CommonMotionBox>
  );
};

export default JoinTeamSection;
