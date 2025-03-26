"use client";

import { useState, useMemo } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

import img1 from "@/assets/blog.jpg";
import img2 from "@/assets/blog.jpg";
import img3 from "@/assets/blog.jpg";
import img4 from "@/assets/blog.jpg";
import img5 from "@/assets/blog.jpg";
import img6 from "@/assets/blog.jpg";

const categories = ["All Item", "Website", "Mobile App", "SAAS"];

const projects = [
  {
    id: 1,
    category: "Website",
    title: "Creative Javanese a Lead Designer & Mobile",
    published: "Jun 2024",
    size: "lg",
    image: img1,
  },
  {
    id: 2,
    category: "Mobile App",
    title: "Next-Gen Finance Tracker App",
    published: "May 2024",
    size: "md",
    image: img2,
  },
  {
    id: 3,
    category: "SAAS",
    title: "AI-Powered Marketing Tool",
    published: "Apr 2024",
    size: "sm",
    image: img3,
  },
  {
    id: 4,
    category: "Website",
    title: "E-commerce Platform Redesign",
    published: "Mar 2024",
    size: "lg",
    image: img4,
  },
  {
    id: 5,
    category: "Mobile App",
    title: "Social Media Management App",
    published: "Feb 2024",
    size: "md",
    image: img5,
  },
  {
    id: 6,
    category: "SAAS",
    title: "Cloud Storage Solution",
    published: "Jan 2024",
    size: "sm",
    image: img6,
  },
  {
    id: 7,
    category: "SAAS",
    title: "Advanced Cybersecurity Platform",
    published: "Dec 2023",
    size: "lg",
    image: img6,
  },
  {
    id: 8,
    category: "SAAS",
    title: "Advanced Cybersecurity Platform",
    published: "Dec 2023",
    size: "lg",
    image: img6,
  },
];

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All Item");

  // Optimized filtering using useMemo
  const filteredProjects = useMemo(
    () =>
      activeCategory === "All Item"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Projects That Inspire
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "text-white border-white transition-all duration-200",
                  activeCategory === category && "bg-white text-black"
                )}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 480: 1, 768: 2, 1024: 2 }}
        >
          <Masonry gutter="24px">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={cn(
                  "relative w-full bg-gray-300 border border-black rounded-md overflow-hidden group",
                  {
                    "aspect-[3/3]": project.size === "lg",
                    "aspect-[1/1]": project.size === "md",
                    "aspect-square": project.size === "sm",
                  }
                )}
              >
                {/* Project Image */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title || "Project Image"}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-[1.08] cursor-pointer"
                    loading="lazy"
                  />
                )}

                {/* Project Details */}
                {project.title && (
                  <div className="absolute bottom-0 rounded-se-full bg-[#EBFFDC] bg-opacity-90  w-[360px] h-[250px] rounded-md shadow-md text-black hidden group-hover:flex flex-col justify-end py-4 px-12">
                    <Badge className="mb-1 text-black border border-black text-lg font-medium bg-white bg-opacity-90 ">
                      {project.category}
                    </Badge>
                    <p className="font-bold text-heading-4 mt-5 mb-4">
                      {project.title}
                    </p>
                    <span className="text-sm">
                      Published {project.published}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
