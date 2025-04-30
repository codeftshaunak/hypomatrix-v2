import SocialIcon from "@/components/common/social-icon";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import paths from "@/router/paths";
import { TWebsite } from "@/types/cms/website";
import { LucideMenu } from "lucide-react";
import Link from "next/link";
import { NavLink } from "./nav-link";
import { NavLinkGroup } from "./nav-link-group";
import { MEETING_MODAL_KEY } from "@/config/keys";
import Image from "next/image";
import { getWebsite } from "@/services/apis/website";

type Props = {
  navLinks: TWebsite["navLinks"];
  socials: TWebsite["socials"];
  title: string;
  description: string;
};

const MobileLinks = async (props: Props) => {
  const { navLinks, socials, title, description } = props;
  const webRes = await getWebsite();

  const logo = webRes?.data?.logo.url;
  if (!logo) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon-lg"}
          variant={"secondary"}
          className="xl:hidden -mt-2 md:-mt-0"
        >
          <LucideMenu />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="w-full max-w-[330px] overflow-scroll"
        side="left"
      >
        <SheetHeader className="mt-8">
          <SheetTitle className="text-heading-4 font-heading font-bold mb-2">
            <Link
              href={paths.root}
              className="h-11 px-5 border border-primary text-card-foreground inline-flex items-center justify-center rounded-full text-heading-5 font-heading font-semibold"
            >
              <Image
                src={logo}
                alt={title}
                width={100}
                height={100}
                priority
                className="rounded-full mr-2 w-[30px]"
              />
              <SheetClose> {title}</SheetClose>
            </Link>
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

          <SheetClose asChild>
            <Button size={"xl"} asChild className="mb-16">
              <Link href={`?${MEETING_MODAL_KEY}=true`}>LETS TALK</Link>
            </Button>
          </SheetClose>

          <h3 className="text-heading-5 font-heading font-bold mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-2">
            {socials.map((social, index) => {
              return (
                <Button
                  size={"icon"}
                  variant={"foreground"}
                  asChild
                  key={index}
                >
                  <Link href={social.href} target={"_blank"}>
                    <SocialIcon name={social.icon} />
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
