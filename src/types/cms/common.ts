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
  id: string;
  icon: SocialIconsType;
  href: string;
};
