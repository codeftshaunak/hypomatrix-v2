import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { TCareer } from "@/types/cms/career";

type Props = {
  career: TCareer;
};

const DetailsSection = (props: Props) => {
  const { career } = props;

  return (
    <section className="md:py-[130px] py-[50px] container px-4 md:px:0">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 mb-16">
        {/* Title and Description */}
        <div className="max-w-[500px] xl:max-w-[700px]">
          <h2 className="text-heading-3 md:text-heading-2 font-heading font-bold mb-5">
            {career.position}
          </h2>
          <p className="text-muted-foreground">{career.description}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-y-10 gap-x-16 max-w-[500px]">
          <div>
            <span className="text-muted-foreground">Category</span>
            <p className="font-heading text-heading-5 font-bold">
              {career.sector}
            </p>
          </div>

          <div className="flex flex-col gap-[3px]">
            <span className="text-muted-foreground">Application</span>
            <Button variant="outline" asChild>
              <Link href={career.applyUrl} target="_blank">
                <span>Apply Now</span>
                <LinkIcon size={18} />
              </Link>
            </Button>
          </div>
          <div>
            <span className="text-muted-foreground">End Date</span>
            <p className="font-heading text-heading-5 font-bold">
              {format(career.applicationEndDate, "dd-MM-yyyy")}
            </p>
          </div>
        </div>
      </div>

      {/* <div
        className="prose prose-invert text-muted-foreground w-full max-w-full"
        dangerouslySetInnerHTML={{ __html: career.content.html }}
      /> */}
      <div
        className="prose prose-invert text-muted-foreground w-full max-w-full"
        dangerouslySetInnerHTML={{ __html: career.content.html }}
      />
    </section>
  );
};

export default DetailsSection;
