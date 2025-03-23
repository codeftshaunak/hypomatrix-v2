"use client";

import { useState } from "react";
// import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Development",
    subtitle: "Web Development",
    description:
      "We innovate development solutions, combining technology and creativity to build efficient, scalable, and user-friendly digital platforms.",
    number: "01",
  },
  {
    id: 2,
    title: "UI/UX Design",
    subtitle: "Mobile apps Design",
    description:
      "We craft intuitive UI/UX designs focused on user engagement, seamless navigation, and delivering exceptional digital experiences.",
    number: "02",
  },
  {
    id: 3,
    title: "Graphics",
    subtitle: "Packaging Design",
    description:
      "We create visually stunning graphic communication that captivates audiences and enhances your overall visual identity.",
    number: "03",
  },
  {
    id: 4,
    title: "Marketing",
    subtitle: "SEO Marketing",
    description:
      "We deliver innovative marketing strategies to boost brand visibility, engage audiences, and drive measurable growth for your business.",
    number: "04",
  },
];

const OurServices = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="">
        <span className="text-white border border-primary text-sm px-4 py-2 rounded-full">
          Our Service
        </span>
        <h2 className="text-4xl font-bold mt-4">Top Services We Offer</h2>

        <div className="mt-8 space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-center justify-between p-6 rounded-lg transition-all cursor-pointer overflow-hidden ${
                active === service.id ? "bg-primary text-black" : "bg-[#18191B]"
              }`}
              onMouseEnter={() => setActive(service.id)}
            >
              <div className="w-40 h-18 bg-white rounded-full flex items-center justify-center text-black">
                320 × 120
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold ">{service.title}</h3>
                <p className="">{service.subtitle}</p>
              </div>
              <div>
                <p className="text-sm mt-2 w-[300px]">{service.description}</p>
              </div>
              <span className=" text-4xl font-bold opacity-20">
                {service.number}
              </span>
              {/* {active === service.id && (
                <div className="ml-4 bg-black p-2 rounded-full text-white">
                  <ArrowRight size={20} />
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
