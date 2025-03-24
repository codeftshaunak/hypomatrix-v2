import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbLink = {
  title: string;
  href: string;
};

type Props = {
  links: BreadcrumbLink[];
};

const Breadcrumb = (props: Props) => {
  const { links } = props;

  return (
    <div className="border rounded-full text-sm py-3 px-6">
      <Link href="/" className="text-muted-foreground hover:text-primary">
        Home
      </Link>
      {links.map((link, index) => (
        <Fragment key={index}>
          <span className="border-r border mx-5"></span>
          <Link
            href={link.href}
            className={cn(
              links.length === index + 1
                ? "text-primary"
                : "text-muted-foreground hover:text-primary",
              "whitespace-nowrap"
            )}
          >
            {link.title}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
