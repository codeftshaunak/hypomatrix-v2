"use client";

import paths from "@/router/paths";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import DesktopLinks from "./desktop-links";

const menuItems = ["Home", "Pages", "Portfolio", "Blogs", "Contact"];
const dropdownItems = ["Pages", "Portfolio", "Home", "Blogs"];

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
        <h2 className="p-[3px] border rounded-full">
          <Link
            href={paths.root}
            className="h-10 px-5 bg-card text-card-foreground inline-flex items-center justify-center rounded-full text-heading-4 font-heading font-bold"
          >
            HypoMatrix
          </Link>
        </h2>

        {/* Desktop Menu */}
        <DesktopLinks />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Button size={"lg"}>LETS TALK</Button>
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col space-y-4 p-6 lg:hidden">
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
