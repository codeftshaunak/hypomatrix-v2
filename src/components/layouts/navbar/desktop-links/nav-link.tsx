"use client";

import { cn } from "@/lib/utils";
import { TLink } from "@/types/cms/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  link: TLink;
}

export function NavLink(props: Props) {
  const { link } = props;
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <li>
      <Link
        href={link.href}
        className={cn(
          "block px-3 py-2 text-body font-heading font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground hover:text-primary"
        )}
      >
        {link.title}
      </Link>
    </li>
  );
}
