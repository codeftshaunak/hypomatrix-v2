import { Card } from "@/components/ui/card";
import paths from "@/router/paths";
import Image from "next/image";
import Link from "next/link";
import { ServiceCardProps } from ".";

function DefaultCard(props: ServiceCardProps) {
  const { data, className, ...others } = props;

  return (
    <Card
      className={`border-none shadow-lg p-8 flex flex-col items-start ${className}`}
      {...others}
    >
      <div className="text-primary bg-background p-4 rounded-xl mb-10">
        <Image src={data.icon.url} alt={data.title} width={32} height={32} />
      </div>
      <h3 className="text-2xl font-extrabold">{data.title}</h3>
      <p className="text-muted-foreground grow w-full">{data.description}</p>
      <Link
        href={paths.services.details(data.slug)}
        className="mt-4 font-semibold flex items-center group hover:text-primary "
      >
        Learn More
        <span className="ml-2 w-6 h-px bg-foreground group-hover:w-16 transition-all"></span>
      </Link>
    </Card>
  );
}

export default DefaultCard;
