import SocialIcon from "@/components/common/social-icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MotionBox } from "@/lib/motion/box";
import paths from "@/router/paths";
import { TWebsite } from "@/types/cms/website";
import { LucideMail, LucidePhone } from "lucide-react";
import Link from "next/link";
import FooterBackground from "./background";
import LeftSpiral from "./left-spiral";
import LegalSection from "./legal-section";
import RightSpiral from "./right-spiral";

type Props = {
  website: TWebsite;
};

export function Footer(props: Props) {
  const { website } = props;

  return (
    <footer className="relative bg-card overflow-hidden px-2 md:px-0">
      <MotionBox
        initial={{ y: "5vw", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <LeftSpiral />
        <RightSpiral />
        <FooterBackground />

        <div className="grid gap-y-16 xl:grid-cols-6 md:pt-[130px] pt-[50px] mb-20 container">
          {/* Column 1: Logo and subscribe */}
          <div className="xl:col-span-2">
            <h2 className="text-heading-3 font-heading font-bold mb-6">
              <Link href={paths.root}>{website.title}</Link>
            </h2>
            <p className="mb-10 max-w-[350px]">{website.description}</p>
            <div className="flex flex-row items-center gap-2 flex-wrap">
              {website?.socials.map((social, index) => {
                return (
                  <Button
                    key={index}
                    asChild
                    size={"icon"}
                    variant={"foreground"}
                  >
                    <Link href={social.href} target={"_blank"}>
                      <SocialIcon name={social.icon} />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="xl:col-span-4 flex flex-col md:flex-row md:items-start md:justify-between gap-y-16">
            {/* Column 2: Address */}
            <div className="md:max-w-[200px] space-y-8">
              {website.addresses[0] && (
                <div>
                  <h3 className="font-bold font-heading mb-6 text-heading-4">
                    Main Address
                  </h3>
                  <p>{website.addresses[0]}</p>
                </div>
              )}

              {website.addresses[1] && (
                <div>
                  <h3 className="font-bold font-heading mb-6 text-heading-4">
                    Sub Address
                  </h3>
                  <p>{website.addresses[1]}</p>
                </div>
              )}
            </div>

            {/* Column 3: Quick Links */}
            <div className="">
              <h3 className="font-bold font-heading text-heading-4 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-5">
                {website.quickLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      target={item.newTab ? "_blank" : undefined}
                      className="hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="">
              <h3 className="font-bold font-heading mb-6 text-heading-4">
                Contact
              </h3>

              <div className="space-y-6">
                {website.emails[0] && (
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-border flex items-center justify-center">
                      <LucideMail size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-heading font-bold">Email</p>
                      <Link
                        className="hover:text-primary"
                        href={`mailto:${website.emails[0]}`}
                        target="_blank"
                      >
                        {website.emails[0]}
                      </Link>
                    </div>
                  </div>
                )}

                {website.phones[0] && (
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-border flex items-center justify-center">
                      <LucidePhone size={18} />
                    </div>
                    <div>
                      <p className="text-lg font-heading font-bold">Phone</p>
                      <Link
                        className="hover:text-primary"
                        href={`tel:${website.phones[0]}`}
                        target="_blank"
                      >
                        {website.phones[0]}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <LegalSection legalLinks={website.legalLinks} title={website.title} />
      </MotionBox>
    </footer>
  );
}
