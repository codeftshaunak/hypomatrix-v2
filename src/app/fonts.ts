import { Roboto, Source_Sans_3 } from "next/font/google";

export const headingFont = Source_Sans_3({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const bodyFont = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
});
