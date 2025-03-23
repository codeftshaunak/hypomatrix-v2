"use client";

import img from "@/assets/single-service.jpg";
import Image from "next/image";

const ClientSuccessSection: React.FC = () => {
  return (
    <section className="py-16 bg-card mt-[380px]">
      <div className="container -mt-[250px] mb-10">
        <Image src={img} alt="Image not found" className="w-full" />
        {/* Content Section */}
        <div className="flex justify-between w-full mt-16">
          <div>
            <span className="border border-primary text-white text-xs uppercase font-semibold px-4 py-2 rounded-full">
              Description
            </span>
            <h2 className="text-5xl font-bold mt-8 w-[700px]">
              Success Through Client Experiences
            </h2>
            <div className="flex gap-10 mt-12">
              <div>
                <p className="text-5xl font-bold">5000+</p>
                <p className="text-base font-semibold text-white">
                  Project Complete
                </p>
              </div>
              <div>
                <p className="text-5xl font-bold">100%</p>
                <p className="text-base text-white">Satisfaction Clients</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold mt-6 w-[600px]">
              We offer a range of specialized services designed to address your
              unique business challenges. Innovative strategies, tailored
              solutions, our expertise ensures exceptional outcomes.
            </p>
            <p className="text-white font-semibold mt-6 w-[600px]">
              We offer a range of specialized services designed to address your
              unique business challenges. innovative strategies tailored
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-2 text-gray-400 hover:text-green-500 cursor-pointer">
                ✔ Passionate Problem-Solvers For Your
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-green-500 cursor-pointer">
                ✔ Business & Financial Creative Innovators
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-green-500 cursor-pointer">
                ✔ Provide National Trusted Client-Centered
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-green-500 cursor-pointer">
                ✔ Perfect & Modern Work Results-Driven
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessSection;
