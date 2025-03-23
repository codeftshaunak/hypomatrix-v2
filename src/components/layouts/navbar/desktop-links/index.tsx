import { desktopLinks } from "../../config";
import { NavDropdown } from "./nav-dropdown";
import { NavLink } from "./nav-link";

type Props = {};

const DesktopLinks = (props: Props) => {
  return (
    <ul className="lg:flex flex-wrap items-center gap-1 hidden border rounded-full px-6 bg-background py-[2.5px]">
      {desktopLinks.map((link, index) => {
        if ("items" in link) {
          return <NavDropdown key={index} link={link} />;
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
