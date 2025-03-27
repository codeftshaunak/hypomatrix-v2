import socialIcons from "@/assets/icons/socials";
import img from "@/assets/team-single1.jpg";
import { TMember } from "@/types/cms/team";
import { LucideGlobe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const userData = {
  name: "Oliver Bennett",
  position: "CEO & Founder",
  about:
    "I'm Oliver Bennett, a passionate CEO & Founder with a love for innovation. With 10 years of experience in Agenko, I specialize in strategic growth. I take pride in leadership and strive to deliver impactful solutions. Outside of work, I enjoy photography and traveling, always seeking inspiration to fuel my creativity and growth.",
  imageUrl: img,
};

type Props = {
  member: TMember;
};

const UserProfile = (props: Props) => {
  const { member } = props;

  return (
    <section className="container flex flex-col md:flex-row items-start pt-[130px] gap-y-16 gap-x-10 lg:gap-x-16 xl:gap-x-32 rounded-lg shadow-lg">
      <Image
        src={userData.imageUrl}
        alt={userData.name}
        className="rounded-lg shrink-0 lg:w-[400px]"
        width={200}
      />
      <div>
        <h2 className="text-heading-2 font-bold font-heading mb-3">
          {member.name}
        </h2>
        <h3 className="text-muted-foreground mb-8">{member.role}</h3>

        <div
          className="text-muted-foreground mb-16"
          dangerouslySetInnerHTML={{ __html: member.about.html }}
        ></div>

        <div className="flex items-center gap-2 flex-wrap">
          {member.social.map((social, index) => {
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
