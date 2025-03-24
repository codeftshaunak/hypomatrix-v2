import { SocialIconsType, TAsset } from "./common";

export type TTeamSocial = {
  id: string;
  icon: SocialIconsType;
  href: string;
};

export type TTeam = {
  id: string;
  slug: string;
  name: string;
  avatar: TAsset;
  role: string;
  about: {
    html: string; // rich text
  };
  social: TTeamSocial[];
};
