"use client";
import img from "@/assets/vector.png";
import img2 from "@/assets/vector2.png";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-card overflow-hidden">
      {/* Left spiral decoration */}
      <motion.div
        className="absolute -left-10 bottom-30 opacity-60"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        <div className="w-full h-full overflow-hidden rounded-full">
          <Image
            src={img}
            width={170}
            height={200}
            alt="Profile picture"
            className="object-cover"
          />
        </div>
      </motion.div>
      {/* Right spiral decoration */}
      <motion.div
        className="absolute right-30 bottom-30 opacity-100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      >
        <div className="w-full h-full overflow-hidden rounded-full">
          <Image
            src={img2}
            width={100}
            height={200}
            alt="Profile picture"
            className="object-cover"
          />
        </div>
      </motion.div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Logo and subscribe */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#5cff44]"></div>
              <span className="font-bold text-xl text-white">Hypomatrix</span>
            </a>

            <p className="text-base font-semibold  mb-6 text-white">
              Hypomatrix creative digital agency delivering <br /> innovate web
              Development marketing
            </p>

            <div className="flex items-center border border-gray-300 bg-white rounded-full overflow-hidden max-w-xs">
              <div className="flex items-center px-3">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 py-4 text-sm outline-none text-black placeholder:text-black"
              />
              <button className="bg-[#9CFE4F] text-black font-semibold px-6 py-2 rounded-full mr-1">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Main Address */}
          <div className="">
            <h3 className="font-bold text-lg mb-6">Main Address</h3>
            <p className="text-base text-white mb-6">
              6801 Hollywood Blvd, Los <br /> Angeles CA 90028
            </p>

            <h3 className="font-bold text-lg mb-6">Sub-Address</h3>
            <p className="text-sm text-white">
              200 Santa Monica Pier,
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

          {/* Column 3: Our Link */}
          <div className="">
            <h3 className="font-bold text-lg mb-6">Our Link</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-white hover:text-[#5cff44] transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white hover:text-[#5cff44] transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-white hover:text-[#5cff44] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white hover:text-[#5cff44] transition-colors"
                >
                  Our gallery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white hover:text-[#5cff44] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="">
            <h3 className="font-bold text-lg mb-6">Contact</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-white">Info@agenko45.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-white">+555-7659-9854</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row  gap-4 justify-between">
          <p className="text-sm text-white">
            © 2024 All rights reserved by HypoMatrix
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-base text-white hover:text-[#5cff44] transition-colors"
            >
              Terms & Condition
            </a>
            <a
              href="#"
              className="text-base text-white hover:text-[#5cff44] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-base text-white hover:text-[#5cff44] transition-colors"
            >
              Policy
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bg-primary size-[261px] rounded-full blur-[150px] -left-[150px] -top-[150px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(100,97,94,0.8)_0%,_transparent_30%)]"></div>
    </footer>
  );
}
