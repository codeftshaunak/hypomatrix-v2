import { TAsset, TMetaTag, TSocial } from "./common";

export type TMember = {
  id: string;
  slug: string;
  name: string;
  avatar: TAsset;
  role: string;
  about: {
    html: string; // rich text
  };
  socials: TSocial[];
  metaTags?: TMetaTag;
};
