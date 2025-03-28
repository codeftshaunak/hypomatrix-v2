import React from "react";
import {
  Check,
  Facebook,
  Instagram,
  InstagramIcon,
  Linkedin,
  LucideIcon,
  MessageSquare,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import img from "@/assets/blog.jpg";
import dot from "@/assets/dot_vector.png";
import Image from "next/image";
import BlogSidebar from "@/components/blog/sidebar";
type Props = {};

const BlogDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container py-12">
      <div className="lg:col-span-2 space-y-12">
        {/* Hero Section */}
        <section className="w-full">
          <div className="container px-4">
            <Image
              src={img}
              alt="image not found"
              className="w-full h-full rounded-lg"
            />
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-8">
              <div className="flex items-center gap-1 px-4 py-2 bg-black rounded-full text-white border border-white">
                <span>By:</span>
                <span className="font-medium">Alex Mika</span>
              </div>
              <div className=" px-4 py-2  bg-black rounded-full text-white border border-white">
                Dec12, 2024
              </div>
              <div className="flex items-center gap-2 ml-auto text-white">
                <MessageSquare size={16} />
                <span className="text-heading-6 font-semibold">05 Comment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="w-full py-4">
          <h2 className="text-heading-3 font-bold mt-6">
            Medical Mobile Design & Development{" "}
          </h2>
          <p className="text-gray-400">
            Creating user-friendly medical mobile apps with innovative designs
            and seamless functionality to enhance healthcare accessibility and
            patient engagement. Designing and developing innovative medical
            mobile apps with user-friendly interfaces, advanced features, and
            secure functionality to enhance healthcare delivery, streamline
            processes, and improve patient engagement and satisfaction
          </p>
        </section>
        {/* Description Section */}
        <section className="w-full py-4">
          <h2 className="text-heading-3 font-bold mt-6">Blog Information</h2>
          <p className="text-gray-400">
            Creating user-friendly medical mobile apps with innovative designs
            and seamless functionality to enhance healthcare accessibility and
            patient engagement. Designing and developing innovative medical
            mobile apps with user-friendly interfaces, advanced features, and
            secure
          </p>
          <p className="text-gray-400">
            A versatile template crafted to narrate the journey of your project,
            detailing its origins, inspirations, and key influences.
            Functionality to enhance healthcare delivery, streamline processes,
            and improve patient engagement and satisfaction
          </p>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-4 px-10 bg-popover text-white">
          <p className="font-semibold mb-2 font-sans text-heading-4">
            Agento Agency transformed our business with their innovative
            strategies and dedicated support. Their team understood
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col mt-4">
              <p className="text-heading-4 font-bold">Mr. David Liam</p>
              <p className="text-sm text-heading-6 font-bold text-gray-300 mt-1">
                CEO & Founder
              </p>
            </div>
            <Image
              src={dot}
              alt="image not found"
              className="w-[45px] h-[40px]"
            />
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative w-full h-[370px] bg-gray-200 rounded-lg">
                <Image
                  src={img}
                  alt="image not found"
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div className="relative w-full h-[370px] bg-gray-200 rounded-lg">
                <Image
                  src={img}
                  alt="image not found"
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="w-full py-4">
          <h2 className="text-heading-3 font-bold mt-6">Work Flow </h2>
          <p className="text-gray-400">
            Streamlining processes with an optimized workflow that enhances
            efficiency, fosters collaboration, and ensures seamless execution of
            tasks to deliver consistent results and drive productivity across
            teams and projects.
          </p>
        </section>
        {/* Work Flow  Section */}
        <section className="w-full py-4">
          <h2 className="text-heading-3 font-bold mt-6">
            Research & strategy{" "}
          </h2>
          <p className="text-gray-400">
            Conducting comprehensive research and crafting data-driven
            strategies to support informed decision-making, streamline
            operations, and achieve sustainable growth while aligning with
            organizational goals and market demands.
          </p>
        </section>

        {/* Tags and Social Section */}
        <section className="w-full py-8 border-y border-gray-800">
          <div className="container">
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="text-white py-1 rounded-full font-medium text-lg">
                  Tags:
                </span>
                <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
                  Design
                </span>
                <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
                  Creative
                </span>
                <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
                  Dark & Light
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-white px-2 font-medium text-lg">
                  Share:
                </span>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white hover:bg-primary text-black flex items-center justify-center"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Comment section */}
        <section className="w-full py-8">
          <p className="text-heading-2 font-bold mb-6">02 Comments</p>
          <div className="container">
            <div className="flex flex-col gap-14">
              <div className="flex gap-4 items-center">
                <div className="relative w-[100px] h-[100px] bg-gray-200 flex-shrink-0">
                  <Image src={img} alt="image not found" />
                </div>
                <div>
                  <h2 className="text-heading-4 font-bold mb-3">
                    Mr. David Liam
                  </h2>
                  <p className="text-sm text-gray-400">
                    Streamlining processes with an optimized workflow that
                    enhances efficiency, fosters collaboration, and ensures
                    seamless execution.
                  </p>
                </div>
                <div className="border border-gray-500 px-5 py-0.5 rounded-md cursor-pointer">
                  Reply
                </div>
              </div>
              <div className="flex gap-4 items-center ml-20">
                <div className="relative w-[100px] h-[100px] bg-gray-200 flex-shrink-0">
                  <Image src={img} alt="image not found" />
                </div>
                <div>
                  <h2 className="text-heading-4 font-bold mb-3">
                    Mr. David Liam
                  </h2>
                  <p className="text-sm text-gray-400">
                    Streamlining processes with an optimized workflow that
                    enhances efficiency, fosters collaboration, and ensures
                    seamless execution.
                  </p>
                </div>
                <div className="border border-gray-500 px-5 py-0.5 rounded-md cursor-pointer">
                  Reply
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form */}
        <section className="py-8 container ">
          <div className="w-[700px]">
            <p className="text-heading-2 font-bold mb-6">Leave a comment</p>
            <form className="mt-6 space-y-6">
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
              <Button className="bg-primary text-black w-full font-bold cursor-pointer h-[60px] text-xl rounded-lg">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </div>
      <BlogSidebar />
    </div>
  );
};

export default BlogDetails;
