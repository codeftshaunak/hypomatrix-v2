import Image from "next/image";
import img from "@/assets/process1.jpg";

const steps = [
  {
    id: 1,
    title: "Research",
    description:
      "We create responsive user-friendly websites tailored to your needs, ensuring seamless functionality and engaging design.",
  },
  {
    id: 2,
    title: "Designing",
    description:
      "We create responsive user-friendly websites tailored to your needs, ensuring seamless functionality and engaging design.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "We create responsive user-friendly websites tailored to your needs, ensuring seamless functionality and engaging design.",
  },
  {
    id: 4,
    title: "Launch",
    description:
      "We create responsive user-friendly websites tailored to your needs, ensuring seamless functionality and engaging design.",
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-800 rounded-full text-lg font-bold">
                {step.id < 10 ? `0${step.id}` : step.id}
              </div>
              <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{step.description}</p>
              <div className="mt-4">
                <Image
                  src={img}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <p className="mt-4 text-gray-400 text-xs">
                We offer a range of specialized services designed to address
                your unique business challenges. Our innovative strategies and
                tailored solutions ensure exceptional outcomes.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
