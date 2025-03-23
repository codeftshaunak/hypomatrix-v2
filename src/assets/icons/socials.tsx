import { SocialIconsType } from "@/types/cms/common";
import { IconType } from "react-icons/lib";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiX,
} from "react-icons/si";

const socialIcons: Record<SocialIconsType, IconType> = {
  facebook: SiFacebook,
  x: SiX,
  linkedin: SiLinkedin,
  github: SiGithub,
  instagram: SiInstagram,
};

export default socialIcons;
