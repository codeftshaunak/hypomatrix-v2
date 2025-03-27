import socialIcons from "@/assets/icons/socials";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import paths from "@/router/paths";
import { TWebsite } from "@/types/cms/website";
import { LucideGlobe, LucideMenu } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { NavLinkGroup } from "./nav-link-group";

type Props = {
  navLinks: TWebsite["navLinks"];
  socials: TWebsite["socials"];
  title: string;
  description: string;
};

const MobileLinks = (props: Props) => {
  const { navLinks, socials, title, description } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size={"icon-lg"} variant={"secondary"} className="lg:hidden">
          <LucideMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-[330px]" side="left">
        <SheetHeader>
          <SheetTitle className="text-heading-4 font-heading font-bold">
            {title}
          </SheetTitle>
          <SheetDescription className="mb-10">{description}</SheetDescription>

          <Accordion type="single" collapsible className="mb-10">
            {navLinks.map((item, index) => {
              if ("href" in item) {
                return <NavLink link={item} key={index} />;
              }

              if ("links" in item) {
                return <NavLinkGroup index={index} group={item} key={index} />;
              }

              return null;
            })}
          </Accordion>

          <Button size={"xl"} asChild className="mb-16">
            <Link href={paths.contact}>Lets Talk</Link>
          </Button>

          <h3 className="text-heading-5 font-heading font-bold mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => {
              const Icon = socialIcons?.[social.icon] || LucideGlobe;

              return (
                <Button size={"icon"} variant={"foreground"} asChild>
                  <Link href={social.href} target={"_blank"} key={index}>
                    <Icon />
                  </Link>
                </Button>
              );
            })}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileLinks;
