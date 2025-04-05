import { TMetaTag } from "./common";

export type TPage = {
  title: string;
  description: string;
  slug: string;
  content?: {
    html: string; // rich text
  };
  metaTags?: TMetaTag;
};
