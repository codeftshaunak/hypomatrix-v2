"use client";

import { Code, Lightbulb, MousePointer, Rocket } from "lucide-react";
import React from "react";
import SectionHeader from "../../components/common/section-header";

type Step = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

export function ProcessSection() {
  const steps: Step[] = [
    {
      id: "01",
      icon: <MousePointer className="w-6 h-6 text-white" />,
      title: "Discovery",
      description:
        "We learn about your business, goals, and audience to understand your unique needs.",
      color: "bg-neon-green",
    },
    {
      id: "02",
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Strategy",
      description:
        "Our team develops a custom strategy tailored to your specific objectives.",
      color: "bg-blue-500",
    },
    {
      id: "03",
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Implementation",
      description:
        "We bring your strategy to life with expert design and development.",
      color: "bg-purple-500",
    },
    {
      id: "04",
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: "Launch",
      description:
        "Your project goes live with our continued support for optimal performance.",
      color: "bg-pink-500",
    },
  ];

  return (
    <section className="container">
      <SectionHeader
        subtitle="Working Proses"
        title="The Process Behind the Magic Step by Step"
        className="mb-[100px] w-[700px]"
      />

      <div className="w-full h-[1px] bg-gray-400 hidden md:block"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step) => (
          <div key={step.id} className="relative flex flex-col items-center ">
            <div className="absolute -top-4 bg-primary w-24 rounded-full py-1 text-black text-lg font-semibold text-center">
              Step-{step.id}
            </div>
            <div className="h-[80px] w-[2px] bg-gray-400"></div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center w-full h-[250px]">
              <div
                className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <div className="w-full aspect-[2/1] bg-gray-600/30 rounded-lg flex items-center justify-center relative">
          <p className="text-gray-400 text-3xl font-light">1605 × 800</p>
          <div className="absolute right-6 bottom-6 bg-primary text-black font-bold py-3 px-6 rounded-md flex flex-col items-center">
            <span className="text-4xl">15k</span>
            <span className="block text-xs">Completed Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
