"use client";

import { ProgressProvider } from "@bprogress/next/app";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const Providers = (props: Props) => {
  return (
    <>
      <ProgressProvider
        height="2px"
        color="var(--primary)"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {props.children}
      </ProgressProvider>
    </>
  );
};

export default Providers;
