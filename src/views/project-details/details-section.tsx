import { TProject } from "@/types/cms/project";
import { format } from "date-fns";
import Image from "next/image";
import CarouselSection from "./carousel-section";

type Props = {
  project: TProject;
};

const DetailsSection = (props: Props) => {
  const { project } = props;

  return (
    <section className="py-[130px] container">
      {/* Banner Image */}
      <div className="relative w-full aspect-[2.58] mb-16">
        <Image
          src={project.thumbnail.url}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 mb-16">
        {/* Title and Description */}
        <div className="max-w-[500px] xl:max-w-[700px]">
          <h2 className="text-heading-3 md:text-heading-2 font-heading font-bold mb-5">
            {project.title}
          </h2>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-16 max-w-[500px]">
          <div>
            <span className="text-muted-foreground">Client</span>
            <p className="font-heading text-heading-5 font-bold">
              {project.client}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Category</span>
            <p className="font-heading text-heading-5 font-bold">
              {project.category}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">Start Date</span>
            <p className="font-heading text-heading-5 font-bold">
              {format(project.startDate, "dd-MM-yyyy")}
            </p>
          </div>
          <div>
            <span className="text-muted-foreground">End Date</span>
            <p className="font-heading text-heading-5 font-bold">
              {format(project.endDate, "dd-MM-yyyy")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="prose prose-invert text-muted-foreground w-full max-w-full mb-16"
        dangerouslySetInnerHTML={{ __html: project.content.html }}
      />

      <CarouselSection images={project.images} />
    </section>
  );
};

export default DetailsSection;
