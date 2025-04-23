import { SocialIconsType } from "@/types/cms/common";
import { IconType } from "react-icons/lib";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTorbrowser,
  SiX,
  SiYoutube,
} from "react-icons/si";

const socialIcons: Record<SocialIconsType, IconType> = {
  facebook: SiFacebook,
  x: SiX,
  linkedin: SiLinkedin,
  github: SiGithub,
  instagram: SiInstagram,
  youtube: SiYoutube,
  portfolio: SiTorbrowser,
};

export default socialIcons;
