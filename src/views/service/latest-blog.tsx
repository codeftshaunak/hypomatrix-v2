"use client";

import Image from "next/image";
import img from "@/assets/blog.jpg";
import { Plus } from "lucide-react";

const blogs = [
  {
    id: 1,
    category: "Web Design",
    date: "02 Oct, 2024",
    title: "Creative Javanese a Lead Designer & Mobile UI/UX Core Checklist",
    tags: ["Marketing", "Design"],
    imageUrl: img, // Replace with actual image
  },
  {
    id: 2,
    category: "Web Design",
    date: "02 Oct, 2024",
    title:
      "Defensive Guide to Make a Daily More Creative Website Productive Working Flow",
    tags: ["Marketing", "Design"],
    imageUrl: img, // Replace with actual image
  },
];

const LatestBlogs = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white border border-primary text-sm px-4 py-2 rounded-full">
              Latest Blogs{" "}
            </span>
            <h2 className="text-6xl font-bold mt-2">
              Expert Insights and News Stay Ahead with Us
            </h2>
          </div>
          <p className="text-gray-400 text-sm">
            Explore expert insights,{" "}
            <span className="font-semibold text-white">industry trends</span>,
            and the latest digital news to keep your business informed and ahead
            of the competition
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-[#18191B] p-6 rounded-lg">
              <div className="relative">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="rounded-lg"
                />
              </div>
              <div className="flex gap-2 mt-4">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 text-sm mt-2">
                    {blog.category} • {blog.date}
                  </p>
                  <h3 className="text-lg font-semibold mt-2 w-[400px]">
                    {blog.title}
                  </h3>
                </div>
                <div className="text-white bg-black h-[40px] w-[40px] rounded-full cursor-pointer flex items-center justify-center">
                  <Plus size={26} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
