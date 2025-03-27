import { website } from "@/db/website";
import paths from "@/router/paths";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import FooterBackground from "./background";
import LeftSpiral from "./left-spiral";
import RightSpiral from "./right-spiral";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 bg-card overflow-hidden">
      <LeftSpiral />
      <RightSpiral />
      <FooterBackground />

      <div className="">
        <div className="md:flex items-start justify-between gap-10 mb-16 container">
          {/* Column 1: Logo and subscribe */}
          <div>
            <h2 className="text-heading-3 font-heading font-bold mb-6">
              <Link href={paths.root}>Hypomatrix</Link>
            </h2>

            <p className="mb-6">
              Hypomatrix creative digital agency delivering <br /> innovate web
              Development marketing
            </p>

            <div className="flex items-center border border-gray-300 bg-white rounded-full overflow-hidden max-w-xs md:mb-0 mb-4">
              <div className="flex items-center px-3">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 py-4 text-sm outline-none text-black placeholder:text-black"
              />
              <button className="bg-[#9CFE4F] text-black font-semibold px-6 py-2 rounded-full mr-1 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Address */}
          <div className="max-w-[200px] space-y-8">
            {website.addresses[0] && (
              <div>
                <h3 className="font-bold font-heading mb-6 text-heading-4">
                  Main Address
                </h3>
                <p>{website.addresses[0]}</p>
              </div>
            )}

            {website.addresses[1] && (
              <div>
                <h3 className="font-bold font-heading mb-6 text-heading-4">
                  Sub Address
                </h3>
                <p>{website.addresses[1]}</p>
              </div>
            )}
          </div>

          {/* Column 3: Our Link */}
          <div className="">
            <h3 className="font-bold font-heading text-heading-4 mb-6">
              Our Link
            </h3>
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
            <h3 className="font-bold text-lg mb-6  text-heading-4 mt-4 md:mt-0">
              Contact
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#212224] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email</p>
                  <p className="text-sm text-white">Info@agenko45.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#212224] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-semibold">Phone</p>
                  <p className="text-sm text-white">+555-7659-9854</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row  gap-4 justify-between"></div>
        {/* Bottom section */}
        <div className="pt-8 flex flex-col md:flex-row  gap-4 justify-between container">
          <p className="text-lg text-white font-semibold">
            © 2024 All rights reserved by HypoMatrix
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-lg text-white hover:text-[#5cff44] transition-colors font-semibold"
            >
              Terms & Condition
            </a>
            <a
              href="#"
              className="text-lg text-white hover:text-[#5cff44] transition-colors font-semibold"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-lg text-white hover:text-[#5cff44] transition-colors font-semibold"
            >
              Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
