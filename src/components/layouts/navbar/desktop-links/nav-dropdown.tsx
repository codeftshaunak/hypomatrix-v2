"use client";

import { cn } from "@/lib/utils";
import { TLinkGroup } from "@/types/cms/common";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  group: TLinkGroup;
}

export function NavLinkGroup(props: Props) {
  const { group } = props;
  const pathname = usePathname();

  return (
    <li className="relative group font-heading">
      <button
        className={cn(
          "flex items-center px-5 py-2 text-body font-medium rounded-full transition-colors cursor-pointer",
          "text-foreground/80 hover:text-foreground",
          "group-hover:text-foreground"
        )}
        aria-haspopup="true"
      >
        {group.title}
        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      <div
        className="invisible opacity-0 absolute left-0 z-10 mt-1 w-[240px] origin-top-left rounded-md bg-popover shadow-md border border-border focus:outline-none transition-all duration-200 group-hover:visible group-hover:opacity-100"
        role="menu"
        aria-orientation="vertical"
      >
        <div className="py-2 px-2 space-y-1">
          {group.links.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className={cn(
                "block px-4 py-2 text-body transition-colors text-popover-foreground rounded-2xl font-medium",
                pathname === item.href
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
              role="menuitem"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </li>
  );
}
