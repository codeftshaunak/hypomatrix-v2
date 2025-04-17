import paths from "@/router/paths";
import { TWebsite } from "@/types/cms/website";
import Link from "next/link";
import { Button } from "../../ui/button";
import DesktopLinks from "./desktop-links";
import MobileLinks from "./mobile-links";
import { MEETING_MODAL_KEY } from "@/config/keys";
import Image from "next/image";
import logo1 from "@/assets/icons/Clip path group.svg";

type Props = {
  website: TWebsite;
};

export default function Navbar(props: Props) {
  const { website } = props;
  return (
    <nav className="container flex justify-between items-center z-50 absolute top-0 left-1/2 -translate-x-1/2 mt-[30px]">
      <div className="flex gap-10 items-center">
        {/* Logo */}
        <h2 className="p-[3px] border rounded-full">
          <Link
            href={paths.root}
            className="h-11 px-5 bg-card text-card-foreground inline-flex items-center justify-center rounded-full text-heading-5 font-heading font-bold"
          >
            <Image
              src={logo1}
              alt={website.title}
              priority
              className="rounded-full mr-2 w-[30px]"
            />
            {website.title}
          </Link>
        </h2>

        {/* Desktop Menu */}
        <DesktopLinks navLinks={website.navLinks} />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Button size={"lg"} asChild className="max-sm:hidden">
          <Link href={`?${MEETING_MODAL_KEY}=true`}>LETS TALK</Link>
        </Button>
        <MobileLinks
          navLinks={website.navLinks}
          socials={website.socials}
          title={website.title}
          description={website.description}
        />
      </div>
    </nav>
  );
}
