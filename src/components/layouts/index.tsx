import React from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
