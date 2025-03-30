import { Button } from "@/components/ui/button";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

type Props = {};

const SocialsSection = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 xl:flex-row xl:items-center flex-wrap">
      <h3 className="text-lg font-heading font-semibold uppercase text-muted-foreground">
        Share:
      </h3>
      <div className="flex items-center flex-wrap gap-1">
        <Button size={"icon"} variant={"foreground"}>
          <SiFacebook size={18} />
        </Button>
        <Button size={"icon"} variant={"foreground"}>
          <SiX size={18} />
        </Button>
        <Button size={"icon"} variant={"foreground"}>
          <SiInstagram size={18} />
        </Button>
        <Button size={"icon"} variant={"foreground"}>
          <SiLinkedin size={18} />
        </Button>
      </div>
    </div>
  );
};

export default SocialsSection;
