"use client";

import BlogPostCard from "@/components/cards/blog-post-card";
import { blogPosts } from "@/db/blog";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import CategoriesSection from "./categories-section";
import LatestPostSection from "./latest-post-section";
import SearchSection from "./search-section";

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container py-[130px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-12">
            {[...blogPosts, ...blogPosts, ...blogPosts, ...blogPosts].map(
              (post, index) => (
                <BlogPostCard data={post} key={index} variant="grid" />
              )
            )}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-8">
            <button
              onClick={handlePrevPage}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800"
            >
              <ChevronLeft size={16} />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full",
                  currentPage === page
                    ? "bg-white text-black"
                    : "border border-gray-700 hover:bg-gray-800"
                )}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-700 hover:bg-gray-800"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <SearchSection />
          <CategoriesSection />
          <LatestPostSection />
        </div>
      </div>
    </div>
  );
}
