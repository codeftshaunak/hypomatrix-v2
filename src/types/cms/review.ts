import { TAsset } from "./common";

export type TReview = {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: TAsset;
  quote: string;
  rating: number;
};
