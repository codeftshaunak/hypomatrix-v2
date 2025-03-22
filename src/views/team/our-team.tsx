import { Twitter, Linkedin, Dribbble, Plus } from "lucide-react";
import SectionHeader from "../../components/common/section-header";

export function TeamSection() {
  const team = [
    {
      name: "Alex Johnson",
      position: "Creative Director",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Sarah Chen",
      position: "Art Director",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Developer",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Emily Williams",
      position: "Marketing Strategist",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Alex Johnson",
      position: "Creative Director",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Sarah Chen",
      position: "Art Director",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Developer",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
    {
      name: "Emily Williams",
      position: "Marketing Strategist",
      image: "300 × 300",
      social: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="inline-block px-4 py-1 border border-lime-400 text-white rounded-full text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Meet the Minds Behind <br /> the Mission
            </h2>
          </div>
          <div className="flex gap-6 items-center">
            <p className="text-6xl">43+</p>
            <span className="border border-gray-700 h-[40px]"></span>
            <p className="">
              PROFESSIONAL <br />
              MEMBERS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="bg-gray-700/30 aspect-square rounded-lg flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 text-xl font-light">
                  {member.image}
                </p>
              </div>
              <div className="text-white bg-black p-2 rounded-full right-4 absolute top-2 cursor-pointer">
                <Plus size={24} />
              </div>

              <div className="text-center">
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {member.position}
                </p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-4 pl-4 pt-4 rounded-lg">
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.dribbble}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                >
                  <Dribbble className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
