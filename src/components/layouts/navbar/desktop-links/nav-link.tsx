"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkItem } from "../../config";

interface NavLinkProps {
  link: LinkItem;
}

export function NavLink({ link }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <li>
      <Link
        href={link.href}
        className={cn(
          "block px-3 py-2 text-body font-medium transition-colors",
          isActive ? "text-primary" : "text-foreground hover:text-primary"
        )}
      >
        {link.title}
      </Link>
    </li>
  );
}
