import { User, Calendar, Folder, Briefcase } from "lucide-react";
import Image from "next/image";
import banner from "@/assets/single-service.jpg";
import blog from "@/assets/blog.jpg";

const projectData = {
  title: "Creative Javanese a Lead Designer & Mobile",
  description:
    "We offer a range of specialized services designed to address your unique business challenges. Innovative strategies, tailored solutions, our expertise ensures.",
  client: "Envato",
  designer: "David Liam",
  category: "We Design",
  startDate: "07-12-2024",
  details:
    "Creative Javanese is a skilled Lead Designer specializing in mobile design, blending artistic innovation with functional excellence. With expertise in user-centered design and mobile optimization, they craft intuitive, visually striking interfaces. Their approach combines cultural richness with modern trends, delivering seamless digital experiences that resonate with users and meet project goals.",
  challenge:
    "The Challenge is a dynamic test of skill, creativity, and determination, pushing individuals or teams to achieve ambitious goals. It fosters growth through innovative problem-solving, resilience, and collaboration. With high stakes and clear objectives, participants navigate complex scenarios, unlocking potential and driving success while overcoming obstacles to deliver impactful results in personal or professional domains.",
  images: [blog, blog],
};

const ProjectDetails = () => {
  return (
    <section className="bg-[#18191B] text-white py-16 px-8 mt-20">
      <div className="container">
        {/* Banner Image */}
        <div className="w-full h-full flex items-center justify-center mb-8">
          <Image src={banner} alt="image not found" className="rounded-lg" />
        </div>

        <div className="flex justify-between items-center">
          {/* Title and Description */}
          <div>
            <h2 className="text-heading-2 font-bold w-[600px]">
              {projectData.title}
            </h2>
            <p className="text-white mt-2 w-[650px]">
              {projectData.description}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-6 mt-6 text-white">
            <div>
              <p className="flex items-center gap-2">
                <Briefcase size={18} /> Client
              </p>
              <p className="font-bold text-heading-3 mt-2">
                {projectData.client}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <User size={18} /> Designer
              </p>
              <p className="font-bold text-heading-3 mt-2">
                {projectData.designer}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <Folder size={18} /> Category
              </p>
              <p className="font-bold text-heading-3 mt-2">
                {projectData.category}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <Calendar size={18} /> Start Date
              </p>
              <p className="font-bold text-heading-3 mt-2">
                {projectData.startDate}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <p className="text-gray-400 mt-6">{projectData.details}</p>

        {/* The Challenge */}
        <h3 className="text-heading-2 font-bold mt-8">The Challenge</h3>
        <p className="text-gray-400 mt-4">{projectData.challenge}</p>
        <p className="text-gray-400 mt-4">
          Whether in a professional or personal context, The Challenge is
          designed to inspire growth, spark collaboration, and unlock hidden
          potential. It tests adaptability, strategic thinking, and teamwork,
          fostering an environment where participants can learn, improve, and
          excel. By embracing uncertainty and tackling high-stakes objectives,{" "}
        </p>

        {/* Images Section */}
        <div className="mt-8 grid grid-cols-2 gap-6">
          {projectData.images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Project image ${index + 1}`}
              className="w-full md:h-[700px]  object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
