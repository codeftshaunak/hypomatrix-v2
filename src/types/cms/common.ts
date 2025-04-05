export type TAsset = {
  url: string;
  width: number;
  height: number;
};

export type SocialIconsType =
  | "facebook"
  | "x"
  | "linkedin"
  | "github"
  | "instagram";

export type TSocial = {
  icon: SocialIconsType;
  href: string;
};

export type TLink = {
  title: string;
  href: string;
  newTab?: boolean;
};

export type TLinkGroup = {
  title: string;
  links: TLink[];
};

export type TMetaTag = {
  title?: string;
  description?: string;
  ogImage?: TAsset;
  index?: boolean;
  follow?: boolean;
};
