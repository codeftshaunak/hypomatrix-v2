import { TAsset } from "./common";

export type TClient = {
  id: string;
  name: string;
  avatar: TAsset;
  logo: TAsset | null;
  company: string;
  position: string;
  review: string;
  rating: number;
};
