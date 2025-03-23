import SectionHeader from "@/components/common/section-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { NeonButton } from "@/components/ui/neon-button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    image: "/assets/project/project1.jpg",
    title: "Banking & Financial Mobile Apps",
    category: "Branding",
    description:
      "We develop secure, user-friendly banking apps, streamlining financial services ",
    tags: ["Website", "Landing Page", "UI/UX"],
  },
  {
    id: 2,
    image: "/assets/project/project2.jpg",
    title: "Knead That Dough Brand Identity",
    description:
      "Crafting a fresh, vibrant brand identity for Knead That Dough.",

    category: "Digital Marketing",
    tags: ["Website", "Landing Page", "UI/UX"],
  },
  {
    id: 3,
    image: "/assets/project/project3.jpg",
    title: "Software Agency Website Header",
    description:
      "Building innovative software solutions to drive your business forward.",

    category: "Web Design",

    tags: ["Website", "Landing Page", "UI/UX"],
  },
  {
    id: 4,
    image: "/assets/project/project2.jpg",
    title: "Crypto Tap Wallet Mobile Apps",
    description: "Secure, fast, and user-friendly crypto wallet for seamless.",

    category: "Development",
    tags: ["Website", "Landing Page", "UI/UX"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 container">
      <SectionHeader
        subtitle="Complete Work"
        title="Creative Projects We've Delivered To Client"
        className="max-w-[700px] mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group rounded-2xl">
            <CardContent>
              <div className="aspect-[1.3/1] w-full relative mb-[30px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-2xl"
                />
                <div className="flex gap-1 text-sm absolute bottom-5 left-5">
                  {project.tags.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <h3 className="text-sm mb-2 text-primary">{project.category}</h3>
              <h2 className="text-heading-4 font-bold mb-3">{project.title}</h2>
              <p className="text-body text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center text-white">
        <NeonButton className="text-black bg-lime-400 cursor-pointer">
          View All Projects
        </NeonButton>
      </div>
    </section>
  );
}
