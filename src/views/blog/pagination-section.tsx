"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginationSectionProps {
  total: number;
  limit: number;
}

const PaginationSection: FC<PaginationSectionProps> = (props) => {
  const { total, limit } = props;
  const searchParams = useSearchParams();
  const urlPage = parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isNaN(urlPage) ? 1 : urlPage;
  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = (): (number | string)[] => {
    if (totalPages <= 5)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (page <= 3) return [1, 2, 3, "...", totalPages];
    if (page >= totalPages - 2)
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];

    return [1, "...", page, "...", totalPages];
  };

  const pages = getPageNumbers();

  return (
    <Pagination>
      {totalPages > 5 && (
        <PaginationContent>
          <PaginationItem>
            <Link
              href={`?page=${Math.max(1, page - 1)}`}
              legacyBehavior
              passHref
            >
              <PaginationPrevious aria-disabled={page === 1} />
            </Link>
          </PaginationItem>

          {pages.map((p, i) => (
            <PaginationItem key={i}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <Link href={`?page=${p}`} legacyBehavior passHref>
                  <PaginationLink
                    aria-current={p === page ? "page" : undefined}
                    isActive={p === page}
                  >
                    {p}
                  </PaginationLink>
                </Link>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <Link
              href={`?page=${Math.min(totalPages, page + 1)}`}
              legacyBehavior
              passHref
            >
              <PaginationNext aria-disabled={page === totalPages} />
            </Link>
          </PaginationItem>
        </PaginationContent>
      )}
    </Pagination>
  );
};

export default PaginationSection;
