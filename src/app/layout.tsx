import MainLayout from "@/components/layouts";
import { cn } from "@/lib/utils";
import { getWebsite } from "@/services/apis/website";
import "@/styles/index.css";
import { generatePageMetadata } from "@/utils/page-metadata";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";
import { ReactNode } from "react";
import { bodyFont, headingFont } from "./fonts";
import Providers from "./providers";

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
      <GoogleTagManager gtmId={process.env.GA_GTM_ID} />
      <body
        className={cn(headingFont.variable, bodyFont.variable, "antialiased")}
      >
        <Providers>
          <MainLayout website={websiteResponse.data}>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

// ----------------------------------------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getWebsite();

  if (!data) {
    return {};
  }

  return {
    description: data.description,
    ...generatePageMetadata(data?.metaTags, "/"),
    title: {
      absolute: data?.metaTags?.title || data.title,
      default: data.title,
      template: `%s | ${data.title}`,
    },
  };
};
