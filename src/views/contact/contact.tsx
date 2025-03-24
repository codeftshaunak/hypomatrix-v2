import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="bg-black text-white py-16">
      <div className="flex gap-28 container">
        {/* Contact Info */}
        <Card className="bg-[#0E0F11] p-6 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-primary mt-4">
            +1 (555) 123-4567
          </h3>
          <div className="mt-4">
            <h4 className="font-semibold text-2xl mb-2">Address</h4>
            <p className="text-sm text-gray-400 mb-2">
              6801 Hollywood Blvd, Los Angeles,
              <br /> CA 90028
            </p>
            <p className="text-sm text-gray-400">
              6801 Hollywood Blvd, Los Angeles,
              <br /> CA 90028
            </p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-2xl mb-2">Email</h4>
            <p className="text-sm text-gray-400">info@agenko45.com</p>
            <p className="text-sm text-gray-400">info@agenko45.com</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-2xl mb-2">Follow</h4>
            <div className="flex space-x-4 mt-2 mb-4">
              <Link
                href="#"
                className="text-black text-2xl hover:bg-lime-400 bg-white p-2 rounded-full"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="text-black text-2xl hover:bg-lime-400 bg-white p-2 rounded-full"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="text-black text-2xl hover:bg-lime-400 bg-white p-2 rounded-full"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                className="text-black text-2xl hover:bg-lime-400 bg-white p-2 rounded-full"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </Card>
        {/* Contact Form */}
        <div className="flex-1">
          <p className="text-white px-2 border border-primary w-[110px] rounded-full text-center mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold">
            Get started and grow your <br /> business now.
          </h2>
          <p className="text-gray-400 mt-2">
            Start today to unlock opportunities and drive your business toward
            success.
          </p>
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Name"
                className="bg-[#1A1B1D] text-white h-[60px] placeholder:text-xl placeholder:font-bold placeholder:text-white border border-gray-500"
              />
              <Input
                placeholder="Email"
                className="bg-[#1A1B1D] text-white h-[60px] placeholder:text-xl placeholder:font-bold placeholder:text-white border border-gray-500"
              />
            </div>
            <Input
              placeholder="Subject"
              className="bg-[#1A1B1D] text-white h-[60px] placeholder:text-xl placeholder:font-bold placeholder:text-white border border-gray-500"
            />
            <Textarea
              placeholder="Message"
              className="bg-[#1A1B1D] text-white w-full h-[150px] placeholder:text-xl placeholder:font-bold placeholder:text-white border border-gray-500"
            />
            <Button className="bg-primary text-black w-full font-bold cursor-pointer h-[60px] text-xl">
              Send Message
            </Button>
          </div>
        </div>
      </div>
      {/* Embedded Map */}
      <div className="mt-18">
        <iframe
          className="w-full h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24128.292239971973!2d-74.0060152!3d40.7127761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19d1455555%3A0xe222a8b403b3d204!2sNew+York%2C+USA!5e0!3m2!1sen!2s!4v1645551080342"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
