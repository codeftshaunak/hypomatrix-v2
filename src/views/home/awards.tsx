"use client";
import img from "@/assets/award.jpg";
import Image from "next/image";

function AwardsSection() {
  const awards = [
    {
      name: "Web Design Award of Excellence",
      year: "2023",
      category: "Best Agency Website",
      organization: "Web Design Association",
    },
    {
      name: "Digital Marketing Innovation Award",
      year: "2022",
      category: "Best Campaign Strategy",
      organization: "Marketing Excellence Forum",
    },
    {
      name: "Creative Direction Gold Medal",
      year: "2022",
      category: "Brand Identity Design",
      organization: "International Design Council",
    },
    {
      name: "UX/UI Design Recognition",
      year: "2021",
      category: "User Experience Excellence",
      organization: "Design Professionals Network",
    },
    {
      name: "Best Digital Agency Award",
      year: "2021",
      category: "Innovation & Creativity",
      organization: "Industry Excellence Awards",
    },
  ];

  return (
    <section id="awards" className="py-20">
      <div className="flex items-center justify-between mb-10 container">
        <div>
          <h3 className="text-sm tracking-wide text-white flex items-center gap-3">
            Our Service
            <span className="h-px w-16 bg-white"></span>
          </h3>
          <h2 className="text-6xl font-bold mt-2">
            Innovative Services That <br /> Elevate Your Brand
          </h2>
        </div>
        <p className="text-gray-400 text-sm">
          <span className="font-semibold text-white">
            We are a digital creative agency
          </span>{" "}
          with <br /> 25 years of experience, specializing in <br /> delivering
          cutting-edge solutions.
        </p>
      </div>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          <div className="md:w-1/3">
            <div className=" bg-gray-700/30 aspect-[410/543] rounded-lg flex items-center justify-center">
              <Image src={img} alt="image not found" />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white/10 py-8 px-4 flex items-center justify-between group cursor-pointer"
                >
                  <h3 className="font-bold text-lg text-gray-400 group-hover:text-white w-[300px]">
                    {award.name}
                  </h3>
                  <p className="font-bold text-lg group-hover:text-primary w-[300px]">
                    {award.category}
                  </p>
                  <span className="font-bold text-lg text-gray-400 group-hover:text-white">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
