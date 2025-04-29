import { Button } from "@/components/ui/button";
import paths from "@/router/paths";
import type { TMember } from "@/types/cms/team";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "../common/social-icon";

type Props = {
  data: TMember;
};

const MemberCard = (props: Props) => {
  const { data } = props;

  return (
    <article className="group cursor-pointer relative">
      <div className="aspect-[3/4] rounded-lg overflow-hidden relative mb-4 ">
        <Image
          src={data.avatar.url}
          fill
          alt={data.name}
          className="object-cover"
        />

        {/* Social Links */}
        <div className="absolute top-3 right-3 group/social focus-within:z-10 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="relative z-10">
            <Plus />
          </Button>

          {data.socials.map((item, index) => {
            return (
              <Link href={item.href} target="_blank" passHref key={index}>
                <Button
                  size="icon"
                  variant="secondary"
                  className="scale-0 transition-transform duration-300 ease-in-out group-hover/social:scale-100 group-hover/social:delay-[50ms] group-focus-within/social:scale-100 group-focus-within/social:delay-[50ms]"
                >
                  <SocialIcon name={item.icon} />
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex-col items-center justify-center text-center bg-black/40 backdrop-blur-xl bottom-5 sm:bottom-0 max-w-[80%] w-full py-7 md:py-10 rounded-2xl sm:opacity-0 group-hover:opacity-100 group-hover:bottom-5 duration-300 px-[10px]">
        <h3 className="font-bold">
          <Link
            href={paths.team.details(data.slug)}
            className="hover:text-primary duration-200 line-clamp-1 md:text-lg"
          >
            {data.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-300 line-clamp-1">{data.role}</p>
      </div>
    </article>
  );
};

export default MemberCard;
