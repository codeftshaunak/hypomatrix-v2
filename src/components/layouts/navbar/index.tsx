"use client";

import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import DesktopLinks from "./desktop-links";

const menuItems = ["Home", "Pages", "Portfolio", "Blogs", "Contact"];
const dropdownItems = ["Pages", "Portfolio", "Home", "Blogs"];

type LinkItem = {
  title: string;
  href: string;
};

type LinkItemDropdown = {
  title: string;
  items: LinkItem[];
};

type Link = LinkItem | LinkItemDropdown;

const links: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pages",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/service" },
      { title: "Service Details", href: "/service-details" },
      { title: "Our Team", href: "/team" },
      { title: "Team Details", href: "/team-details" },
      { title: "Pricing", href: "/pricing" },
      { title: "FAQS", href: "/faqs" },
      { title: "Contact Us", href: "/contact" },
      { title: "404", href: "/404" },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { title: "Web Design", href: "/web-design" },
      { title: "Graphic Design", href: "/graphic-design" },
      { title: "UI/UX", href: "/ui-ux" },
      { title: "Branding", href: "/branding" },
    ],
  },
  {
    title: "Blogs",
    items: [
      { title: "Latest News", href: "/latest-news" },
      { title: "Technology", href: "/technology" },
      { title: "Business", href: "/business" },
      { title: "Lifestyle", href: "/lifestyle" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

// Submenu Mapping
const subMenus: Record<string, string[]> = {
  Pages: [
    "About Us",
    "Our Services",
    "Service Details",
    "Our Team",
    "Team Details",
    "Pricing",
    "FAQS",
    "Contact Us",
    "404",
  ],
  Portfolio: ["Web Design", "Graphic Design", "UI/UX", "Branding"],
  Home: ["Landing Page", "Main Home", "Corporate Home"],
  Blogs: ["Latest News", "Technology", "Business", "Lifestyle"],
};
const navLinks: Record<string, string[]> = {
  Pages: [
    "/about",
    "/service",
    "/service-details",
    "Our Team",
    "Team Details",
    "Pricing",
    "FAQS",
    "Contact Us",
    "404",
  ],
  Portfolio: ["Web Design", "Graphic Design", "UI/UX", "Branding"],
  Home: ["/", "Main Home", "Corporate Home"],
  Blogs: ["Latest News", "Technology", "Business", "Lifestyle"],
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="container flex justify-between items-center z-50 absolute top-0 left-1/2 -translate-x-1/2 mt-[30px]">
      <div className="flex gap-10 items-center">
        {/* Logo */}
        <div className="flex items-center border border-gray-500 bg-transparent rounded-full px-2 py-1">
          <span className="text-xl font-bold flex items-center">
            <span className="text-white px-6 py-2 bg-gray-900 rounded-full p-2">
              HypoMatrix
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <DesktopLinks />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Button size={"lg"}>LETS TALK</Button>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col space-y-4 p-6 md:hidden">
          {menuItems.map((item) => (
            <div key={item} className="dropdown-container">
              <button
                className="flex items-center justify-between w-full hover:text-lime-400 transition"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === item ? null : item)
                }
              >
                {item}
                {dropdownItems.includes(item) && <ChevronDown size={16} />}
              </button>
              {dropdownItems.includes(item) && dropdownOpen === item && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 bg-gray-900 rounded-md py-2"
                >
                  {subMenus[item]?.map((subItem, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-800 transition"
                    >
                      {subItem}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
