import img from "@/assets/Join Cercle.png";
import img1 from "@/assets/team-thumb1.jpg";
import Image from "next/image";

const JoinTeamSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 bg-black text-white relative">
      <div className="flex flex-col gap-5">
        <p className="text-white opacity-30 text-[100px] font-bold mb-5">
          Join Our
        </p>
        <div className="flex items-center gap-4 mb-5">
          <Image
            src={img}
            alt="image not found"
            width={100}
            className="spin-in animate-spin duration-7000"
          />
          <span className="text-white text-[100px] font-bold">Talented</span>{" "}
          <br />
        </div>
        <p className="text-white text-[100px] font-bold">Team</p>
      </div>

      <div className="flex gap-16 relative">
        <div className="w-[200px] h-[204px] mt-20">
          <Image
            src={img1}
            alt="image not found"
            className="rounded-tl-xl rounded-br-xl"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="w-[190px] h-[192px]">
            <Image
              src={img1}
              alt="image not found"
              className="rounded-b-full"
            />
          </div>
          <div className="w-[220px] h-[204px]">
            <Image
              src={img1}
              alt="image not found"
              className="rounded-tl-xl rounded-br-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
