import { TAsset, TMetaTag } from "./common";

export type TProject = {
  id: string;
  slug: string;
  thumbnail: TAsset;
  title: string;
  category: string;
  pageTitle: string;
  client: string;
  previewLink: string;
  content: {
    html: string; // rich text
  };
  description: string;
  images: TAsset[];
  startDate: string; // iso timestamp
  endDate: string; // iso timestamp
  tags: string[];
  cardSize: "auto" | "tall" | "wide";
  metaTags?: TMetaTag;
};
