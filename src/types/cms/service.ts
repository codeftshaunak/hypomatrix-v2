import { TAsset, TMetaTag } from "./common";

export type TServiceStep = {
  id: string;
  title: string;
  description: string;
  image: TAsset;
};

export type TService = {
  id: string;
  thumbnail: TAsset;
  icon: TAsset;
  slug: string;
  title: string;
  category: string;
  description: string;
  completeProjects: number;
  successRate: number; // 0-100
  content: { html: string }; // richtext
  steps: TServiceStep[];
  metaTags?: TMetaTag;
};
