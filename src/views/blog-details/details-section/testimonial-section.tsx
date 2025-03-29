import dot from "@/assets/dot_vector.png";
import Image from "next/image";

type Props = {};

const TestimonialSection = (props: Props) => {
  return (
    <section className="w-full py-4 px-10 bg-popover text-white">
      <p className="font-semibold mb-2 font-sans text-heading-4">
        Agento Agency transformed our business with their innovative strategies
        and dedicated support. Their team understood
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col mt-4">
          <p className="text-heading-4 font-bold">Mr. David Liam</p>
          <p className="text-sm text-heading-6 font-bold text-gray-300 mt-1">
            CEO & Founder
          </p>
        </div>
        <Image src={dot} alt="image not found" className="w-[45px] h-[40px]" />
      </div>
    </section>
  );
};

export default TestimonialSection;
