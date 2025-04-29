import { TProject } from "@/types/cms/project";
import { format } from "date-fns";
import Image from "next/image";
import CarouselSection from "./carousel-section";
import Link from "next/link";
import { Link2, Link2Icon, LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  project: TProject;
};

const DetailsSection = (props: Props) => {
  const { project } = props;

  return (
    <section className="md:py-[130px] py-[50px] container px-4 md:px:0">
      {/* Banner Image */}
      <div className="relative w-full aspect-video mb-16">
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
            <span className="text-muted-foreground">Category</span>
            <p className="font-heading text-heading-5 font-bold">
              {project.category}
            </p>
          </div>

          {project.previewLink && (
            <div className="flex flex-col gap-[3px]">
              <span className="text-muted-foreground">Preview</span>
              <Button variant="outline" size={"lg"} asChild className="w-fit">
                <Link href={project.previewLink} target="_blank">
                  <span className="font-heading text-[18px] font-bold">
                    Visit Project
                  </span>
                  <LinkIcon size={18} />
                </Link>
              </Button>
            </div>
          )}
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
        className="prose prose-invert text-muted-foreground w-full max-w-full"
        dangerouslySetInnerHTML={{ __html: project.content.html }}
      />

      {!!project?.images?.length && <CarouselSection images={project.images} />}
    </section>
  );
};

export default DetailsSection;
