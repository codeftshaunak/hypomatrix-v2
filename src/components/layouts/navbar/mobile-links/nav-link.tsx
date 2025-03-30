"use client";

import { AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SheetClose } from "@/components/ui/sheet";
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
    <AccordionItem value={link.href} className="px-4">
      <SheetClose asChild>
        <Link
          href={link.href}
          className={cn(
            isActive ? "text-primary" : "text-foreground hover:text-primary"
          )}
        >
          <AccordionTrigger icon={null} className="py-2">
            {link.title}
          </AccordionTrigger>
        </Link>
      </SheetClose>
    </AccordionItem>
  );
}
