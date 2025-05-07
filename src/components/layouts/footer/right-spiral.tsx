"use client";

import img2 from "@/assets/vector2.png";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const RightSpiral = (props: Props) => {
  return (
    <motion.div
      className="absolute right-5 md:right-30 md:bottom-30 bottom-10/12 opacity-100"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    >
      <div className="w-full h-full overflow-hidden rounded-full">
        <Image
          src={img2}
          width={150}
          height={150}
          alt="Profile picture"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default RightSpiral;
