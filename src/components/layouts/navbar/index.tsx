import { website } from "@/db/website";
import paths from "@/router/paths";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "../../ui/button";
import DesktopLinks from "./desktop-links";

export default function Navbar() {
  return (
    <nav className="container flex justify-between items-center z-50 absolute top-0 left-1/2 -translate-x-1/2 mt-[30px]">
      <div className="flex gap-10 items-center">
        {/* Logo */}
        <h2 className="p-[3px] border rounded-full">
          <Link
            href={paths.root}
            className="h-10 px-5 bg-card text-card-foreground inline-flex items-center justify-center rounded-full text-heading-4 font-heading font-bold"
          >
            {website.title}
          </Link>
        </h2>

        {/* Desktop Menu */}
        <DesktopLinks navLinks={website.navLinks} />
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <Button size={"lg"} asChild>
          <Link href={"/contact"}>LETS TALK</Link>
        </Button>
        <button className="lg:hidden" aria-label="Toggle Menu">
          <X size={24} />
        </button>
      </div>
    </nav>
  );
}
