import { TLink, TLinkGroup, TSocial } from "./common";

export type TWebsite = {
  title: string;
  description: string;
  phones: string[];
  emails: string[];
  addresses: string[];
  socials: TSocial[];
  quickLinks: TLink[];
  navLinks: (TLink | TLinkGroup)[];
  legalLinks: TLink[];
};
