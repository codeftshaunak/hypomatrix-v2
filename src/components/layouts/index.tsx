import { TWebsite } from "@/types/cms/website";
import React from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
  website: TWebsite;
};

const MainLayout = (props: Props) => {
  const { children, website } = props;
  return (
    <>
      <Navbar website={website} />
      {children}
      <Footer website={website} />
    </>
  );
};

export default MainLayout;
