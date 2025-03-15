"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Close dropdowns when clicking outside
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
    <nav className="bg-black text-white px-6 md:px-10 py-3 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-lg font-bold flex items-center">
          <span className="bg-white text-black px-2 py-1 rounded">A</span>genko
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {["Home", "Pages", "Portfolio", "Blogs", "Contact"].map((item) => (
          <div key={item} className="relative dropdown-container">
            <button
              className="flex items-center space-x-1 hover:text-lime-400 transition"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(dropdownOpen === item ? null : item);
              }}
            >
              <span>{item}</span>
              {(item === "Pages" || item === "Portfolio") && (
                <ChevronDown size={16} />
              )}
            </button>

            {/* Dropdown */}
            {(item === "Pages" || item === "Portfolio") &&
              dropdownOpen === item && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md py-2"
                >
                  {["Sub-item 1", "Sub-item 2", "Sub-item 3", "Sub-item 4"].map(
                    (subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-200 transition"
                      >
                        {subItem}
                      </a>
                    )
                  )}
                </motion.div>
              )}
          </div>
        ))}
      </div>

      {/* Right Side (CTA + Mobile Menu) */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#9CFE4F] text-black px-4 py-2 rounded-full text-sm font-bold">
          LET'S TALK
        </button>

        {/* Mobile Menu Button */}
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
          {["Home", "Pages", "Portfolio", "Blogs", "Contact"].map((item) => (
            <div key={item} className="dropdown-container">
              <button
                className="flex items-center justify-between w-full hover:text-lime-400 transition"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === item ? null : item)
                }
              >
                {item}
                {(item === "Pages" || item === "Portfolio") && (
                  <ChevronDown size={16} />
                )}
              </button>

              {/* Mobile Dropdown */}
              {(item === "Pages" || item === "Portfolio") &&
                dropdownOpen === item && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 bg-gray-900 rounded-md py-2"
                  >
                    {[
                      "Sub-item 1",
                      "Sub-item 2",
                      "Sub-item 3",
                      "Sub-item 4",
                    ].map((subItem, index) => (
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
