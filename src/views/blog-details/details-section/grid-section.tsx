import img from "@/assets/blog.jpg";
import Image from "next/image";

type Props = {};

const GridSection = (props: Props) => {
  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative w-full h-[370px] bg-gray-200 rounded-lg">
            <Image
              src={img}
              alt="image not found"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="relative w-full h-[370px] bg-gray-200 rounded-lg">
            <Image
              src={img}
              alt="image not found"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
