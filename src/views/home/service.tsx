"use client";

import { Card } from "@/components/ui/card";
import { Camera, Code, Paintbrush } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className: string;
}

function ServiceCard({
  icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <Card
      className={`bg-[#18191B] text-white border-none shadow-lg p-8 flex flex-col items-start space-y-4 h-[400px] ${className}`}
    >
      <div className="text-white bg-black p-4 rounded-xl">{icon}</div>
      <h3 className="text-2xl font-extrabold mb-0">{title}</h3>
      <p className="text-gray-400 flex-grow mt-0">{description}</p>
      <a
        href="#"
        className="mt-4 text-white font-semibold flex items-center group hover:text-lime-400 "
      >
        Learn More
        <span className="ml-2 w-6 h-px bg-white group-hover:w-16 transition-all"></span>
      </a>
    </Card>
  );
}

export default function Services() {
  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm tracking-wide flex items-center gap-3">
            Our Service
            <span className="h-px w-16 bg-foreground"></span>
          </h3>
          <h2 className="text-6xl font-bold mt-2">
            Innovative Services That <br /> Elevate Your Brand
          </h2>
        </div>
        <p className="text-muted-foreground text-sm mt-62">
          <span className="font-semibold text-foreground">
            We are a digital creative agency
          </span>{" "}
          with <br /> 25 years of experience, specializing in <br /> delivering
          cutting-edge solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 relative">
        <ServiceCard
          className=""
          icon={<Code size={50} />}
          title="Website Development"
          description="We create responsive, user-friendly websites tailored to your brand, ensuring seamless functionality and optimized design."
        />
        <ServiceCard
          className="mt-12"
          icon={<Paintbrush size={50} />}
          title="Creative Branding & Identity"
          description="We design distinctive branding and visual identities that connect with your audience, boosting brand recognition."
        />
        <ServiceCard
          className="mt-22 mb-20"
          icon={<Camera size={50} />}
          title="Photography & Videography"
          description="We capture stunning photography and engaging videography, telling your brand’s story with creativity, authenticity, and visual appeal."
        />
      </div>
    </section>
  );
}
