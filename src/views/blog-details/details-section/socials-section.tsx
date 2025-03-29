import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

type Props = {};

const SocialsSection = (props: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-white px-2 font-medium text-lg">Share:</span>
      <a
        href="#"
        className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
      >
        <SiFacebook size={18} />
      </a>
      <a
        href="#"
        className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
      >
        <SiX size={18} />
      </a>
      <a
        href="#"
        className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
      >
        <SiInstagram size={18} />
      </a>
      <a
        href="#"
        className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
      >
        <SiLinkedin size={18} />
      </a>
    </div>
  );
};

export default SocialsSection;
