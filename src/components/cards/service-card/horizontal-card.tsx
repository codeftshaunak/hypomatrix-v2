import { Card, CardContent } from "@/components/ui/card";
import paths from "@/router/paths";
import Image from "next/image";
import Link from "next/link";
import { ServiceCardProps } from ".";

function HorizontalCard(props: ServiceCardProps) {
  const { data, className, ...others } = props;

  return (
    <Card {...others}>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center">
        <div className="lg:row-span-2 xl:row-span-1 mb-5 lg:mb-0">
          <div className="w-full max-w-[300px] h-28 relative">
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              fill
              className="rounded-3xl lg:rounded-full object-cover"
            />
          </div>
        </div>
        <div className="mb-2 xl:mb-0">
          <h3 className="text-heading-3 lg:text-heading-2 font-heading font-bold ">
            <Link
              href={paths.services.details(data.slug)}
              className="hover:text-primary duration-200"
            >
              {data.category}
            </Link>
          </h3>
          <h4 className="text-heading-6 lg:text-heading-4 font-medium text-muted-foreground">
            <Link
              href={paths.services.details(data.slug)}
              className="hover:text-primary duration-200"
            >
              {data.title}
            </Link>
          </h4>
        </div>
        <div>
          <p className="text-body text-muted-foreground ml-auto">
            {data.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default HorizontalCard;
