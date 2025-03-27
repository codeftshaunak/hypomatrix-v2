"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { TLinkGroup } from "@/types/cms/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  group: TLinkGroup;
  index: number;
}

export function NavLinkGroup(props: Props) {
  const { group, index } = props;
  const pathname = usePathname();

  return (
    <AccordionItem value={`nav-${index}`} className="px-4">
      <AccordionTrigger className="py-2">{group.title}</AccordionTrigger>
      <AccordionContent className="pt-5">
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
      </AccordionContent>
    </AccordionItem>
  );
}
