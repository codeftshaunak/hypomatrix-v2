import SocialIcon from "@/components/common/social-icon";
import { Card, CardContent } from "@/components/ui/card";
import { getWebsite } from "@/services/apis/website";
import Image from "next/image";
import Link from "next/link";
import image from "@/assets/world.png";

type Props = {};

const InfoSection = async (props: Props) => {
  const { data } = await getWebsite();

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt="world background"
        fill
        className="object-cover z-0"
        priority
      />
      <Card>
        <CardContent className="md:pb-18 py-8 flex flex-col gap-y-14">
          <div>
            <h4 className="font-bold text-heading-4 md:text-heading-3 font-heading mb-3">
              Email
            </h4>
            <div className="md:text-2xl text-xl xl:text-2xl sm:font-bold font-heading ">
              {data?.emails.map((email, index) => (
                <Link
                  href={`mailto:${email}`}
                  target="_blank"
                  className="hover:underline decoration-primary text-white break-words"
                  key={index}
                >
                  {email}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-heading-4 md:text-heading-3 font-heading mb-3">
              Address
            </h4>
            <div className="max-w-[250px] flex flex-col gap-y-2">
              {data?.addresses.map((address, index) => (
                <p className="text-white text-xl break-words" key={index}>
                  {address}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold font-heading text-heading-4 md:text-heading-3 mb-3">
              Phone
            </h4>
            <Link
              href={`tel:${data?.phones[0]}`}
              target="_blank"
              className="text-white text-xl"
            >
              {data?.phones[0]}
            </Link>
          </div>
          <div>
            <h4 className="font-bold font-heading text-heading-4 md:text-heading-3 mb-5">
              Follow
            </h4>
            <div className="flex flex-row items-center gap-3 flex-wrap">
              {data?.socials.map((social, index) => {
                return (
                  <Link
                    href={social.href}
                    target={"_blank"}
                    className="text-background bg-foreground text-2xl hover:bg-primary hover:text-primary-foreground p-2 rounded-full duration-200"
                    key={index}
                  >
                    <SocialIcon name={social.icon} />
                  </Link>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoSection;
