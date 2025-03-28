import paths from "@/router/paths";
import { TLink } from "@/types/cms/common";
import Link from "next/link";

type Props = {
  title: string;
  legalLinks: TLink[];
};

const LegalSection = (props: Props) => {
  const { legalLinks, title } = props;
  return (
    <div className="py-10 flex flex-col md:flex-row  gap-4 justify-between container">
      <p className="text-lg font-medium font-heading flex items-center gap-1">
        <span>© {new Date().getFullYear()}</span>
        <Link href={paths.root} className="text-primary hover:underline">
          {title}
        </Link>
        <span>- All rights Reserved</span>
      </p>

      <div className="flex items-center gap-6">
        {legalLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-lg hover:text-primary transition-colors font-medium font-heading"
            target={item.newTab ? "_blank" : undefined}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LegalSection;
