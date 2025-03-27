import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-primary hover:text-black"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary hover:text-black ${
            currentPage === page
              ? "bg-primary text-black"
              : "border border-gray-700 hover:bg-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-primary hover:text-black"
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
