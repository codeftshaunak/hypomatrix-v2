import img from "@/assets/blog.jpg";
import Image from "next/image";

type Props = {};

const GridSection = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative w-full aspect-square">
        <Image
          src={img}
          alt="image not found"
          className="object-cover rounded-lg"
          fill
        />
      </div>
      <div className="relative w-full aspect-square">
        <Image
          src={img}
          alt="image not found"
          className="object-cover rounded-lg"
          fill
        />
      </div>
    </div>
  );
};

export default GridSection;
