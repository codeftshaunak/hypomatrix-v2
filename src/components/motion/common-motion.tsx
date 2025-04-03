import React, { ReactNode } from "react";
import { MotionBox } from "./box";

type Props = {
  children: ReactNode | undefined;
};

const CommonMotionBox = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <MotionBox
        initial={{ y: "10vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </MotionBox>
    </div>
  );
};

export default CommonMotionBox;
