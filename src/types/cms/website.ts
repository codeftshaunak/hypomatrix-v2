import { TLink, TLinkGroup, TSocial } from "./common";

export type TWebsite = {
  title: string;
  description: string;
  phones: string[];
  emails: string[];
  addresses: string[];
  socials: TSocial[];
  footerLinks: TLink[];
  navLinks: (TLink | TLinkGroup)[];
  legalLink: TLink[];
};
