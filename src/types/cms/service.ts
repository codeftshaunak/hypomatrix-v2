import { TAsset } from "./common";

export type TServiceSteps = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export type TService = {
  id: string;
  image: TAsset;
  icon: TAsset;
  slug: string;
  title: string;
  category: string;
  description: string;
  completeProjects: number;
  successRate: number; // 0-100
  content: { html: string }; // richtext
  steps: TServiceSteps[];
};
