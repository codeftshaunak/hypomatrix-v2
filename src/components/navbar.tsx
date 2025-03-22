// "use client";

// import { useState, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (!(event.target as HTMLElement).closest(".dropdown-container")) {
//         setDropdownOpen(null);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <nav className="text-white px-6 py-3 flex justify-between items-center relative pt-8 z-50">
//       <div className="flex gap-10">
//         {/* Logo */}
//         <div className="flex items-center border border-gray-500 bg-transparent rounded-full px-2 py-1">
//           <span className="text-xl font-bold flex items-center">
//             <span className="text-white px-6 py-2 bg-gray-900 rounded-full p-2">
//               HypoMatrix
//             </span>
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10  items-center border border-gray-600 bg-black rounded-full px-6 py-2 font-semibold">
//           {["Home", "Pages", "Portfolio", "Blogs", "Contact"].map((item) => (
//             <div key={item} className="relative dropdown-container">
//               <button
//                 className="flex items-center space-x-1 hover:text-lime-400 transition"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setDropdownOpen(dropdownOpen === item ? null : item);
//                 }}
//               >
//                 <span>{item}</span>
//                 {(item === "Pages" ||
//                   item === "Portfolio" ||
//                   item === "Home" ||
//                   item === "Blogs") && <ChevronDown size={16} />}
//               </button>

//               {/* Dropdown */}
//               {(item === "Pages" ||
//                 item === "Portfolio" ||
//                 item === "Home" ||
//                 item === "Blogs") &&
//                 dropdownOpen === item && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md py-2"
//                   >
//                     {[
//                       "Sub-item 1",
//                       "Sub-item 2",
//                       "Sub-item 3",
//                       "Sub-item 4",
//                     ].map((subItem, index) => (
//                       <a
//                         key={index}
//                         href="#"
//                         className="block px-4 py-2 hover:bg-gray-200 transition"
//                       >
//                         {subItem}
//                       </a>
//                     ))}
//                   </motion.div>
//                 )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right Side (CTA + Mobile Menu) */}
//       <div className="flex items-center space-x-4">
//         <button className="bg-[#9CFE4F] text-black px-6 py-4 rounded-full text-sm font-bold">
//           LET'S TALK
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col space-y-4 p-6 md:hidden">
//           {["Home", "Pages", "Portfolio", "Blogs", "Contact"].map((item) => (
//             <div key={item} className="dropdown-container">
//               <button
//                 className="flex items-center justify-between w-full hover:text-lime-400 transition"
//                 onClick={() =>
//                   setDropdownOpen(dropdownOpen === item ? null : item)
//                 }
//               >
//                 {item}
//                 {(item === "Pages" || item === "Portfolio") && (
//                   <ChevronDown size={16} />
//                 )}
//               </button>

//               {/* Mobile Dropdown */}
//               {(item === "Pages" || item === "Portfolio") &&
//                 dropdownOpen === item && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className="mt-2 bg-gray-900 rounded-md py-2"
//                   >
//                     {[
//                       "Sub-item 1",
//                       "Sub-item 2",
//                       "Sub-item 3",
//                       "Sub-item 4",
//                     ].map((subItem, index) => (
//                       <a
//                         key={index}
//                         href="#"
//                         className="block px-4 py-2 hover:bg-gray-800 transition"
//                       >
//                         {subItem}
//                       </a>
//                     ))}
//                   </motion.div>
//                 )}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <nav className="text-white px-6 py-3 flex justify-between items-center relative pt-8 z-50">
      <div className="flex gap-10">
        {/* Logo */}
        <div className="flex items-center border border-gray-500 bg-transparent rounded-full px-2 py-1">
          <span className="text-xl font-bold flex items-center">
            <span className="text-white px-6 py-2 bg-gray-900 rounded-full p-2">
              HypoMatrix
            </span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center border border-gray-600 bg-black rounded-full px-6 py-2 font-semibold">
          {menuItems.map((item) => (
            <div key={item} className="relative dropdown-container ">
              <button
                className="flex items-center space-x-1 hover:text-lime-400 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(dropdownOpen === item ? null : item);
                }}
              >
                <span className="cursor-pointer">{item}</span>
                {dropdownItems.includes(item) && <ChevronDown size={16} />}
              </button>

              {/* Submenu Dropdown */}
              {dropdownItems.includes(item) && dropdownOpen === item && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-40 bg-black text-white shadow-lg rounded-md py-2"
                >
                  {subMenus[item]?.map((subItem, index) => (
                    <Link
                      key={index}
                      href={navLinks[item][index]}
                      className="block px-4 py-2 hover:bg-gray-200 hover:text-black hover:rounded-lg transition"
                    >
                      {subItem}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <button className="bg-[#9CFE4F] text-black px-6 py-4 rounded-full text-sm font-bold">
          LET`&apos;`S TALK
        </button>
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
