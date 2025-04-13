import SocialIcon from "@/components/common/social-icon";
import { TMember } from "@/types/cms/team";
import Image from "next/image";
import Link from "next/link";

type Props = {
  member: TMember;
};

const UserProfile = (props: Props) => {
  const { member } = props;

  return (
    <section className="container flex flex-col md:flex-row items-center md:pt-[130px] gap-y-16 gap-x-10 lg:gap-x-16 xl:gap-x-32 rounded-lg shadow-lg ">
      <div className="max-w-[400px] lg:w-[400px] shrink-0 relative aspect-[3/4]">
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
            return (
              <Link
                href={social.href}
                target="_blank"
                key={index}
                className="size-10 inline-flex items-center justify-center bg-foreground rounded-full text-background hover:bg-primary hover:text-primary-foreground duration-200"
              >
                <SocialIcon name={social.icon} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
