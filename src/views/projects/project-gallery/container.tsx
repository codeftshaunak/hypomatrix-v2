"use client";

import { ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 340: 1, 740: 2, 992: 3 }}>
      <Masonry>{props.children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default Container;
