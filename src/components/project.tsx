"use client";

import { useEffect, useState } from "react";
import { NeonButton } from "./ui/neon-button";
import { Plus } from "lucide-react";
import Header from "./common/Header";

export function ProjectsSection() {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-container")) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const projects = [
    {
      id: 1,
      image: "650 × 500",
      title: "Banking & Financial Mobile Apps",
      category: "Branding",
      description:
        "We develop secure, user-friendly banking apps, streamlining financial services ",
      tagss: ["Website", "Landing Page", "UI/UX"],
      tags: ["Design", "Strategy", "Research", "Development"],
    },
    {
      id: 2,
      image: "460 × 425",
      title: "Knead That Dough Brand Identity",
      description:
        "Crafting a fresh, vibrant brand identity for Knead That Dough.",

      category: "Digital Marketing",
      tagss: ["Website", "Landing Page", "UI/UX"],
      tags: ["SEO", "Content", "Ads", "Analytics"],
    },
    {
      id: 3,
      image: "650 × 500",
      title: "Software Agency Website Header",
      description:
        "Building innovative software solutions to drive your business forward.",

      category: "Web Design",
      tags: ["Design", "UX", "UI", "Research"],
      tagss: ["Website", "Landing Page", "UI/UX"],
    },
    {
      id: 4,
      image: "460 × 425",
      title: "Crypto Tap Wallet Mobile Apps",
      description:
        "Secure, fast, and user-friendly crypto wallet for seamless.",

      category: "Development",
      tags: ["Web", "Shop", "Code", "Testing"],
      tagss: ["Website", "Landing Page", "UI/UX"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <Header
            item="Complete Work"
            title="Creative Projects We've Delivered To Client"
            className="w-[700px]"
          />
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10  items-center border border-gray-600 bg-black rounded-full px-6 py-2 font-semibold mt-10">
            {["All Item", "Website", "Mobile App", "SAAS"].map((item) => (
              <div key={item} className="relative dropdown-container">
                <button
                  className="flex items-center space-x-1 text-white hover:text-lime-400 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen(dropdownOpen === item ? null : item);
                  }}
                >
                  <span>{item}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg p-6 bg-gray-700/30"
            >
              <div className="bg-white aspect-[1.3/1] w-full flex items-center justify-center rounded-lg">
                <p className="text-black text-xl font-light ">
                  {project.image}
                </p>
              </div>
              <div className="text-white bg-black p-2 rounded-full right-10 absolute top-8 cursor-pointer">
                <Plus size={26} />
              </div>

              <div className="text-white flex gap-1 text-sm absolute bottom-40 left-10">
                {project.tagss.map((tag, idx) => (
                  <p
                    key={idx}
                    className=" bg-black px-4 py-1 rounded-full cursor-pointer"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="text-white text-lg font-bold mt-6 mb-2 ">
                {project.title}
              </div>
              <div className="text-white gap-1 text-sm ">
                {project.description}
              </div>
              <div className="text-white gap-1 text-sm ">
                {project.category}
              </div>
              <div className="absolute cursor-pointer inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-white">
          <NeonButton className="text-black bg-lime-400 cursor-pointer">
            View All Projects
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
