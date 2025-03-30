import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/db/blog";
import paths from "@/router/paths";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const LatestPostSection = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <h3 className="text-heading-4 font-bold font-heading">Latest Posts</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        {[...blogPosts].slice(0, 3).map((post) => (
          <div key={post.id} className="flex gap-3 items-center">
            <div className="flex-shrink-0 aspect-square w-[100px] relative">
              <Image
                src={post.thumbnail.url}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <Badge className="mb-3 px-3 py-1" variant={"outline"}>
                {post.category?.title}
              </Badge>
              <h4 className="text-lg leading-tight font-heading font-medium line-clamp-2">
                <Link
                  href={paths.blog.details(post.slug)}
                  className="hover:text-primary"
                >
                  {post.title}
                </Link>
              </h4>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LatestPostSection;
