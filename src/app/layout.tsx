import MainLayout from "@/components/layouts";
import { cn } from "@/lib/utils";
import { getWebsite } from "@/services/apis/website";
import "@/styles/index.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { bodyFont, headingFont } from "./fonts";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "HypoMatrix",
  description: "Solve Business Challenges With HypoMatrix",
};

type Props = {
  children: ReactNode;
};

const RootLayout = async (props: Props) => {
  const websiteResponse = await getWebsite();

  if (!websiteResponse.data) {
    throw new Error("Failed to fetch website data");
  }

  const { children } = props;

  return (
    <html lang="en">
      <body
        className={cn(headingFont.variable, bodyFont.variable, "antialiased")}
      >
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Providers>
          <MainLayout website={websiteResponse.data}>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
