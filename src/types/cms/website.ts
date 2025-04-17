import {
  TAsset,
  TLink,
  TLinkGroup,
  TMetaTag,
  TSocial,
  TWorkStep as TWorkSteps,
} from "./common";

export type TWebsite = {
  logo: TAsset;
  title: string;
  description: string;
  phones: string[];
  emails: string[];
  addresses: string[];
  socials: TSocial[];
  quickLinks: TLink[];
  navLinks: (TLink | TLinkGroup)[];
  legalLinks: TLink[];
  metaTags?: TMetaTag;
  workSteps: TWorkSteps[];
  mapLink: string;
  videoUrl: string;
  videoThumbnail: TAsset;
};
