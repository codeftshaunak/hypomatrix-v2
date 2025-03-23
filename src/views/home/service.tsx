import SectionHeader from "@/components/common/section-header";
import { Card } from "@/components/ui/card";
import { Camera, Code, Paintbrush } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className: string;
  href: string;
}

function ServiceCard(props: ServiceCardProps) {
  const { icon, title, description, className, href } = props;

  return (
    <Card
      className={`border-none shadow-lg p-8 flex flex-col items-start ${className}`}
    >
      <div className="text-primary bg-background p-4 rounded-xl mb-10">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <p className="text-muted-foreground flex-grow">{description}</p>
      <Link
        href={href}
        className="mt-4 text-foreground font-semibold flex items-center group hover:text-primary "
      >
        Learn More
        <span className="ml-2 w-6 h-px bg-foreground group-hover:w-16 transition-all"></span>
      </Link>
    </Card>
  );
}

export default function Services() {
  return (
    <section className="container pb-[130px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-16">
        <SectionHeader
          title={
            <>
              Innovative Services That <br /> Elevate Your Brand
            </>
          }
          subtitle="Our Service"
          className="flex-1"
        />
        <p className="text-muted-foreground">
          <span className="font-semibold text-foreground">
            We are a digital creative agency
          </span>{" "}
          with <br /> 25 years of experience, specializing in <br /> delivering
          cutting-edge solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <div>
          <ServiceCard
            className="h-full lg:h-auto "
            icon={<Code size={50} />}
            title="Website Development"
            description="We create responsive, user-friendly websites tailored to your brand, ensuring seamless functionality and optimized design."
            href="/services/website-development"
          />
        </div>
        <div>
          <ServiceCard
            className="h-full lg:h-auto lg:mt-12"
            icon={<Paintbrush size={50} />}
            title="Creative Branding & Identity"
            description="We design distinctive branding and visual identities that connect with your audience, boosting brand recognition."
            href="/services/website-development"
          />
        </div>
        <div>
          <ServiceCard
            className="h-full lg:h-auto lg:mt-22"
            icon={<Camera size={50} />}
            title="Photography & Videography"
            description="We capture stunning photography and engaging videography, telling your brand’s story with creativity, authenticity, and visual appeal."
            href="/services/website-development"
          />
        </div>
      </div>
    </section>
  );
}
