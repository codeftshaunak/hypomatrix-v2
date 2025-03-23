"use client";
import Image from "next/image";
import img from "@/assets/team-single2.jpg";

const Experience = () => {
  return (
    <section className="bg-black text-white flex items-center justify-between py-16">
      <div className="w-[550px]">
        <span className="border-primary border text-white text-sm px-4 py-2 rounded-full">
          Experience{" "}
        </span>
        <h2 className="text-5xl font-bold mt-6">
          Lessons Learned Along the Way{" "}
        </h2>
        <p className="text-gray-400 mt-6">
          Discover the lessons that shaped my journey—insights from challenges,
          achievements, and growth, offering wisdom, resilience, and inspiration
          for navigating life’s path with purpose.
        </p>

        <div className="mt-6">
          <div className="mb-4">
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">77%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "77%" }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">87%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "87%" }}
              ></div>
            </div>
          </div>

          <div>
            <p className="font-semibold flex justify-between">
              <span> Design Solution</span>
              <span className="text-white">81%</span>
            </p>
            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "81%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[580px] h-[476px]">
        <Image
          src={img}
          alt="image not found"
          width={580}
          height={476}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Experience;
