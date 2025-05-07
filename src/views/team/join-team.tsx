import img from "@/assets/icons/Join Cercle copy.png";
import CommonMotionBox from "@/lib/motion/common-motion";
import Image from "next/image";
import img1 from "@/assets/telented-team/team.jpg";
import img2 from "@/assets/telented-team/team_02.jpg";
import img3 from "@/assets/telented-team/Tonmoy-Deb.jpg";
import Link from "next/link";

const JoinTeamSection: React.FC = () => {
  return (
    <CommonMotionBox>
      <section className="flex flex-col container lg:flex-row lg:items-center justify-between md:pb-[130px] pb-[50px] gap-y-10">
        <div className="relative flex flex-col items-center lg:items-start gap-6 lg:gap-0">
          <h2 className="flex items-center flex-col lg:items-start lg:flex-none text-heading-1 leading-none font-bold font-heading md:max-w-[500px] md:text-[90px] xl:text-[120px] text-center lg:text-left">
            <span className="text-stroke text-stroke-muted-foreground text-transparent">
              Join Our
            </span>{" "}
            <span className="lg:ml-28 xl:ml-36">Talented </span>
            <span className="text-left"> Team</span>
          </h2>
          <Link href={"/contact"}>
            <Image
              src={img}
              alt="image not found"
              width={80}
              className="spin-in animate-spin duration-7000 absolute top-1/2 left-0 -translate-y-1/2 md:w-[100px] xl:w-[130px] hidden lg:inline-block"
            />
          </Link>
        </div>
        <div className="flex items-center gap-8 relative justify-center">
          <Image
            src={img1}
            alt="image not found"
            className="rounded-tl-4xl rounded-br-4xl aspect-square max-w-[220px] w-[170px] md:w-[200px] lg:w-[280px] xl:w-[320px] 2xl:w-[370px]"
          />

          <div className="flex flex-col gap-6 shrink-0">
            <Image
              src={img2}
              alt="image not found"
              className="rounded-b-full aspect-square max-w-[200px] w-[140px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px]"
            />
            <Image
              src={img3}
              alt="image not found"
              className="rounded-tr-4xl rounded-bl-3xl aspect-square max-w-[200px] w-[140px] md:w-[200px] lg:w-[250px] xl:w-[300px] 2xl:w-[350px]"
            />
          </div>
        </div>
      </section>
    </CommonMotionBox>
  );
};

export default JoinTeamSection;
