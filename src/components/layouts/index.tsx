import TawkChat from "@/lib/tawk";
import { TWebsite } from "@/types/cms/website";
import React, { Suspense } from "react";
import MeetingModal from "../../lib/meeting";
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
      <Suspense>
        <MeetingModal />
        <TawkChat />
      </Suspense>
    </>
  );
};

export default MainLayout;
