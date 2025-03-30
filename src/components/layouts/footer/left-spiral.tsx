"use client";

import img from "@/assets/vector.png";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const LeftSpiral = (props: Props) => {
  return (
    <motion.div
      className="absolute -left-10 bottom-30 opacity-60"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    >
      <div className="w-full h-full overflow-hidden rounded-full hidden md:block">
        <Image
          src={img}
          width={170}
          height={200}
          alt="Profile picture"
          className="object-cover"
        />
      </div>
    </motion.div>
  );
};

export default LeftSpiral;
