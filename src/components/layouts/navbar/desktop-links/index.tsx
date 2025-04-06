import { TWebsite } from "@/types/cms/website";
import { NavLinkGroup } from "./nav-dropdown";
import { NavLink } from "./nav-link";

type Props = {
  navLinks: TWebsite["navLinks"];
};

const DesktopLinks = (props: Props) => {
  const { navLinks } = props;
  return (
    <ul className="lg:flex flex-wrap items-center gap-1 hidden border rounded-full px-[2.5px] bg-background py-[2.5px]">
      {navLinks.map((link, index) => {
        if ("links" in link) {
          return <NavLinkGroup key={index} group={link} />;
        }

        if ("href" in link) {
          return <NavLink link={link} key={index} />;
        }

        return null;
      })}
    </ul>
  );
};

export default DesktopLinks;
