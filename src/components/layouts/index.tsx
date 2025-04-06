import { TWebsite } from "@/types/cms/website";
import React, { Suspense } from "react";
import { Footer } from "./footer";
import Navbar from "./navbar";
import MeetingModal from "../meeting";

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
      <Suspense>
        <MeetingModal />
      </Suspense>
    </>
  );
};

export default MainLayout;
