import img from "@/assets/blog.jpg";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="w-full">
      <Image
        src={img}
        alt="image not found"
        className="w-full h-full rounded-lg"
      />
      <div className="flex flex-col items-center text-center justify-center md:flex-row gap-4 text-sm text-gray-400 mt-8">
        <div className="md:flex items-center gap-1 px-4 py-2 bg-black rounded-full text-white border border-white">
          <span>By:</span>
          <span className="font-medium">Alex Mika</span>
        </div>
        <div className=" px-4 py-2  bg-black rounded-full text-white border border-white">
          Dec12, 2024
        </div>
        <div className="flex items-center gap-2 md:ml-auto text-white">
          <MessageSquare size={16} />
          <span className="text-heading-6 font-semibold">05 Comment</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
