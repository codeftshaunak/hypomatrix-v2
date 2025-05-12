import img from "@/assets/blog.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

type Props = {};

const CommentsSection = (props: Props) => {
  return (
    <>
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
            <div className="flex gap-4 items-center md:ml-20">
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
        <div className="md:w-[700px]">
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
    </>
  );
};

export default CommentsSection;
