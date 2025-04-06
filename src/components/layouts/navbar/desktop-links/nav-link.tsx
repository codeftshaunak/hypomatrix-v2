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
          "block px-5 rounded-full py-2 text-body font-heading font-medium transition-colors",
          isActive
            ? "text-foreground bg-card"
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {link.title}
      </Link>
    </li>
  );
}
