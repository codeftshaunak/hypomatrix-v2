"use client";

import { Code, Rocket, MessageCircle, PenTool } from "lucide-react";

const HowWeAre = () => {
  return (
    <section className="text-white mt-10 mb-20 ">
      <div className="flex items-center">
        <div>
          <span className="inline-block px-4 py-1 border border-lime-400 text-white rounded-full text-sm mb-4">
            How We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            We are leading Innovative marketing agency.
          </h2>
        </div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          <strong className="text-white">
            Leading Innovation marketing agency
          </strong>{" "}
          We are a leading innovative marketing agency, specializing in creative
          solutions that drive business growth, enhance brand visibility.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-12">
        {sections.map((section, index) => (
          <div key={index} className="bg-[#1D1E20] p-6 rounded-lg text-center">
            <div className="text-3xl mb-4 text-green-400 inline-block">
              {section.icon}
            </div>
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p className="text-gray-400 mt-2">
              We are a leading innovative marketing agency, specializing.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const sections = [
  { title: "Research", icon: <Code size={32} /> },
  { title: "Planning", icon: <PenTool size={32} /> },
  { title: "Development", icon: <MessageCircle size={32} /> },
  { title: "Launch", icon: <Rocket size={32} /> },
];

export default HowWeAre;
