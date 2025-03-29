import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogCategories } from "@/db/blog";
import paths from "@/router/paths";
import Link from "next/link";

type Props = {};

const CategoriesSection = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-heading-4 font-bold font-heading">Categories</h2>
      </CardHeader>
      <CardContent className="flex items-center flex-wrap gap-2">
        {blogCategories.map((item, index) => (
          <Badge asChild className="text-sm px-3 py-1" key={index}>
            <Link href={paths.blog.category(item.slug)}>{item.title}</Link>
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default CategoriesSection;
