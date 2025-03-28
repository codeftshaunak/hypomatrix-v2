import { TAsset } from "./common";

export type TProject = {
  id: string;
  slug: string;
  thumbnail: TAsset;
  title: string;
  category: string;
  client: string;
  content: {
    html: string; // rich text
  };
  description: string;
  images: TAsset[];
  startDate: string; // iso timestamp
  endDate: string; // iso timestamp
  tags: string[];
  size: "tall" | "wide";
};
