import socialIcons from "@/assets/icons/socials";
import { Card, CardContent } from "@/components/ui/card";
import { website } from "@/db/website";
import { LucideGlobe } from "lucide-react";
import Link from "next/link";

type Props = {};

const InfoSection = (props: Props) => {
  return (
    <Card>
      <CardContent className="py-10">
        <h3 className="text-4xl font-bold text-primary font-heading mb-8">
          {website.phones[0]}
        </h3>
        <div className=" mb-8">
          <h4 className="font-bold text-heading-3 font-heading mb-5">
            Address
          </h4>
          <div className="max-w-[250px] flex flex-col gap-y-2">
            {website.addresses.map((address, index) => (
              <p className="text-muted-foreground" key={index}>
                {address}
              </p>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h4 className="font-bold font-heading text-heading-3 mb-5">Email</h4>
          <div className="max-w-[250px] flex flex-col gap-y-2">
            {website.emails.map((email, index) => (
              <p className="text-muted-foreground" key={index}>
                {email}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold font-heading text-heading-3 mb-5">Follow</h4>
          <div className="flex flex-row items-center gap-3 flex-wrap">
            {website.socials.map((social, index) => {
              const Icon = socialIcons?.[social.icon] ?? LucideGlobe;
              return (
                <Link
                  href="#"
                  className="text-background bg-foreground text-2xl hover:bg-primary hover:text-primary-foreground p-2 rounded-full duration-200"
                  key={index}
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoSection;
