"use client";

import { ReactNode } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type Props = {
  children: ReactNode;
};

const Container = (props: Props) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 992: 3 }}>
      <Masonry>{props.children}</Masonry>
    </ResponsiveMasonry>
  );
};

export default Container;
