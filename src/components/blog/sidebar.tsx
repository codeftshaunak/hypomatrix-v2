import React from "react";
import img from "@/assets/blog.jpg";
import { Search } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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

const BlogSidebar = () => {
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
  return (
    <div>
      {/* Sidebar */}
      <div className="space-y-8">
        {/* Search */}
        <div className="bg-popover rounded-lg p-8">
          <h3 className="text-heading-4 font-bold mb-4">Search here</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-popover rounded-lg py-3 px-4 pr-10 text-sm focus:outline-none ring-1 ring-gray-700"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Search size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-popover rounded-lg p-10">
          <h3 className="text-heading-4 font-bold mb-4">Categories</h3>
          <div className="space-y-5">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-white text-heading-6 font-bold">
                  {category.name}
                </span>
                <span className="text-white text-heading-6 font-bold">
                  ({category.count.toString().padStart(2, "0")})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Posts */}
        <div className="bg-popover rounded-lg p-6">
          <h3 className="text-heading-4 font-bold mb-4">Latest Posts</h3>
          <div className="space-y-5">
            {latestPosts.map((post) => (
              <div key={post.id} className="flex gap-3 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={150}
                    height={150}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-heading-6 bg-black text-white border border-gray-500 px-2 py-1 rounded-full">
                    {post.type}
                  </span>
                  <h4 className="text-heading-6 font-bold text-white leading-snug mt-4">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="bg-popover rounded-lg p-6">
          <h3 className="text-heading-4 font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Link
                key={index}
                href="#"
                className="px-4 py-2 bg-black rounded-full text-heading-6 hover:bg-primary hover:text-black transition-colors"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
