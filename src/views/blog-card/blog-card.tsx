import Image from "next/image";
import { Plus, MessageSquare } from "lucide-react";
import img from "@/assets/team-single2.jpg";
import Pagination from "@/components/blog/blog-pagination";
export default function BlogCard({}) {
  const projects = [
    {
      id: 1,
      title: "Medical mobile app design and development",
      description:
        "Creating user-friendly medical mobile apps with innovative designs and seamless.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
    {
      id: 2,
      title: "Sales management mobile app design solutions",
      description:
        "Crafting intuitive sales management app designs to streamline workflows, boost productivity.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
    {
      id: 3,
      title: "Financial and wallet website design services",
      description:
        "Creating secure, visually appealing financial and wallet websites with intuitive designs.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
    {
      id: 4,
      title: "Medical Mobile Design & Development",
      description:
        "Creating user-friendly medical mobile apps with innovative designs and seamless.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
    {
      id: 5,
      title: "Medical Mobile Design & Development",
      description:
        "Creating user-friendly medical mobile apps with innovative designs and seamless.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
    {
      id: 6,
      title: "Medical Mobile Design & Development",
      description:
        "Creating user-friendly medical mobile apps with innovative designs and seamless.",
      author: "Alex Mika",
      date: "Dec12, 2024",
      comments: 5,
      image: img,
    },
  ];
  return (
    <section className="pt-20 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col mb-3">
            <div className="relative">
              <div className="relative w-full h-[340px] bg-gray-200 rounded-md overflow-hidden">
                <Image
                  src={img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black transition-colors hover:bg-primary hover:text-black cursor-pointer">
                <Plus className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between text-white text-sm">
              <div className="flex gap-4">
                <div className="flex items-center px-3 py-[6px]  bg-black rounded-full  border border-gray-700">
                  <span>By: {project.author}</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-[6px]  bg-black rounded-full border border-gray-700">
                  <span>{project.date}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>{project.comments} Comment</span>
              </div>
            </div>

            <h3 className="mt-5 mb-2 text-heading-4 font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-400 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
      <div className="mb-10">
        <Pagination currentPage={1} totalPages={4} />
      </div>
    </section>
  );
}
