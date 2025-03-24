import { SocialIconsType, TAsset } from "./common";

export type TMemberSocial = {
  id: string;
  icon: SocialIconsType;
  href: string;
};

export type TMember = {
  id: string;
  slug: string;
  name: string;
  avatar: TAsset;
  role: string;
  about: {
    html: string; // rich text
  };
  social: TMemberSocial[];
};
