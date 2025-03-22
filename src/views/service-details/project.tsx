// type Project = {
//   id: number;
//   width: number;
//   height: number;
//   title?: string;
//   date?: string;
//   span: "full" | "half";
// };

// const projects: Project[] = [
//   {
//     id: 1,
//     width: 915,
//     height: 500,
//     title: "Creative Javanese a Lead Designer & Mobile",
//     date: "Jun 2024",
//     span: "full",
//   },
//   { id: 2, width: 448, height: 650, span: "half" },
//   { id: 3, width: 948, height: 650, span: "half" },
//   { id: 4, width: 452, height: 650, span: "half" },
//   { id: 5, width: 952, height: 650, span: "half" },
//   { id: 6, width: 915, height: 500, span: "full" },
// ];

// export default function ProjectsSection() {
//   return (
//     <section className="max-w-7xl mx-auto px-8 py-16">
//       <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
//         Projects That Inspire
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className={`
//               relative group bg-gray-50 rounded-2xl overflow-hidden
//               shadow-lg hover:shadow-xl transition-all duration-300
//               ${project.span === "full" ? "md:col-span-2" : "md:col-span-1"}
//               hover:scale-[1.02] transition-transform duration-300 ease-in-out
//             `}
//             style={{ height: `${project.height}px` }}
//           >
//             {/* Dimension badge */}
//             <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
//               <span className="text-gray-100 font-medium text-sm tracking-wide">
//                 {project.width} x {project.height}
//               </span>
//             </div>

//             {/* Content overlay */}
//             {project.title && (
//               <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
//                 <div className="space-y-2">
//                   <h3 className="text-2xl font-bold text-white">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-300 font-medium text-sm">
//                     Published {project.date}
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* Hover overlay for non-text items */}
//             {!project.title && (
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

type Project = {
  id: number;
  width: number;
  height: number;
  title?: string;
  date?: string;
  span: "full" | "half";
};

const projects: Project[] = [
  {
    id: 1,
    width: 515,
    height: 500,
    title: "Creative Javanese a Lead Designer & Mobile",
    date: "Jun 2024",
    span: "full",
  },
  { id: 2, width: 448, height: 650, span: "half" },
  { id: 3, width: 948, height: 650, span: "half" },
  { id: 4, width: 452, height: 650, span: "half" },
  { id: 5, width: 952, height: 650, span: "half" },
  { id: 6, width: 915, height: 500, span: "full" },
];

export default function ProjectsSection() {
  return (
    <section className="py-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center">
        Projects That Inspire
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`
                relative group bg-gray-50 rounded-2xl overflow-hidden
                shadow-lg hover:shadow-xl transition-all duration-300
                ${project.span === "full" ? "md:col-span-2" : "md:col-span-1"}
                hover:scale-[1.02] transition-transform duration-300 ease-in-out
              `}
            style={{ height: `${project.height}px` }}
          >
            {/* Dimension badge */}
            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-gray-100 font-medium text-sm tracking-wide">
                {project.width} x {project.height}
              </span>
            </div>

            {/* Content overlay */}
            {project.title && (
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-medium text-sm">
                    Published {project.date}
                  </p>
                </div>
              </div>
            )}

            {/* Hover overlay for non-text items */}
            {!project.title && (
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
