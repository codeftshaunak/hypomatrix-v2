"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import img from "@/assets/blog.jpg";
import BlogSidebar from "@/components/blog/sidebar";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  comments: number;
  image: StaticImageData;
  category: string;
};

type Category = {
  name: string;
  count: number;
};

type LatestPost = {
  id: number;
  title: string;
  author: string;
  type: string;
  image: StaticImageData;
};

type Tag = {
  name: string;
};

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Medical Mobile Design & Development",
      description:
        "Creating user-friendly medical mobile apps with innovative designs and seamless functionality to enhance healthcare accessibility and patient engagement.",
      author: "Alex Mika",
      date: "Dec 12, 2024",
      comments: 5,
      image: img,
      category: "Design Agency",
    },
    {
      id: 2,
      title: "Sales Management Mobile App Design",
      description:
        "Crafting intuitive sales management app designs to streamline workflows, boost productivity, and enhance team collaboration for better results.",
      author: "Alex Mika",
      date: "Dec 12, 2024",
      comments: 5,
      image: img,
      category: "Business",
    },
    {
      id: 3,
      title: "Financial & Wallet Website Design",
      description:
        "Creating secure, visually appealing financial and wallet websites with intuitive designs to streamline transactions and deliver a seamless user experience.",
      author: "Alex Mika",
      date: "Dec 12, 2024",
      comments: 5,
      image: img,
      category: "Financial",
    },
  ];

  const categories: Category[] = [
    { name: "Creative Agency", count: 5 },
    { name: "Modern Agency", count: 3 },
    { name: "Business", count: 7 },
    { name: "Marketing", count: 6 },
    { name: "Video Tutorial", count: 10 },
    { name: "Design Agency", count: 12 },
  ];

  const latestPosts: LatestPost[] = [
    {
      id: 1,
      title: "Creative Japanese Designer And Website UI/UX Core",
      author: "Alex Mika",
      type: "Website",
      image: img,
    },
    {
      id: 2,
      title: "Creative Japanese Designer And Dashboard UI/UX Core",
      author: "Alex Mika",
      type: "Dashboard",
      image: img,
    },
    {
      id: 3,
      title: "Creative Japanese Designer And Mobile UI/UX Core",
      author: "Alex Mika",
      type: "Mobile App",
      image: img,
    },
  ];

  const tags: Tag[] = [
    { name: "Design" },
    { name: "Creative" },
    { name: "Dark & Light" },
    { name: "Modern" },
    { name: "Digital" },
    { name: "Minimal" },
    { name: "Agenda" },
    { name: "Business" },
    { name: "Financial" },
  ];

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
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={770}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400 mt-8">
                  <div className="flex items-center gap-1 px-4 py-2 bg-black rounded-full text-white border border-white">
                    <span>By:</span>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className=" px-4 py-2  bg-black rounded-full text-white border border-white">
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 ml-auto text-white">
                    <MessageSquare size={16} />
                    <span className="text-heading-6 font-semibold">
                      {post.comments} Comment
                    </span>
                  </div>
                </div>
                <h2 className="text-heading-3 font-bold mt-6">{post.title}</h2>
                <p className="text-gray-400">{post.description}</p>
              </div>
            ))}

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
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
