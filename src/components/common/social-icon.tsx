import socialIcons from "@/assets/icons/socials";
import { SocialIconsType } from "@/types/cms/common";
import { LucideGlobe2 } from "lucide-react";
import { IconBaseProps } from "react-icons/lib";

type Props = {
  name: SocialIconsType;
} & IconBaseProps;

const SocialIcon = (props: Props) => {
  const { name, ...others } = props;
  const Icon = socialIcons[name] ?? LucideGlobe2;

  return <Icon {...others} />;
};

export default SocialIcon;
