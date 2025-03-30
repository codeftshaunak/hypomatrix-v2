import socialIcons from "@/assets/icons/socials";
import { TMember } from "@/types/cms/team";
import { LucideGlobe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  member: TMember;
};

const UserProfile = (props: Props) => {
  const { member } = props;

  return (
    <section className="container flex flex-col md:flex-row items-start pt-[130px] gap-y-16 gap-x-10 lg:gap-x-16 xl:gap-x-32 rounded-lg shadow-lg">
      <div className="max-w-[400px] lg:w-[400px] shrink-0 relative aspect-square">
        <Image
          src={member.avatar.url}
          alt={member.name}
          className="rounded-lg shrink-0 object-cover"
          fill
        />
      </div>
      <div>
        <h2 className="text-heading-2 font-bold font-heading mb-3">
          {member.name}
        </h2>
        <h3 className="text-heading-4 text-muted-foreground mb-8">
          {member.role}
        </h3>

        <div
          className="text-muted-foreground mb-16"
          dangerouslySetInnerHTML={{ __html: member.about.html }}
        ></div>

        <div className="flex items-center gap-2 flex-wrap">
          {member.socials.map((social, index) => {
            const Icon = socialIcons?.[social.icon] || LucideGlobe;

            return (
              <Link
                href={social.href}
                key={index}
                className="size-10 inline-flex items-center justify-center bg-foreground rounded-full text-background hover:bg-primary hover:text-primary-foreground duration-200"
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
