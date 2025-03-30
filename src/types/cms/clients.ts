import { TAsset } from "./common";

export type TClient = {
  name: string;
  avatar: TAsset;
  logo: TAsset;
  company: string;
  position: string;
  review: string;
};
