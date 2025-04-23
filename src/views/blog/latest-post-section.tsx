import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CommonMotionBox from "@/lib/motion/common-motion";
import paths from "@/router/paths";
import { getBlogPosts } from "@/services/apis/blog";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const LatestPostSection = async (props: Props) => {
  const blogRes = await getBlogPosts();
  return (
    <CommonMotionBox>
      <Card>
        <CardHeader>
          <h3 className="text-heading-4 font-bold font-heading">
            Latest Posts
          </h3>
        </CardHeader>
        <CardContent className="space-y-6">
          {[...(blogRes.data || [])].slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="flex gap-3 items-center justify-center"
            >
              <div className="flex-shrink-0 aspect-video w-[120px] relative">
                <Image
                  src={post.thumbnail.url}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-1">
                {/* <Badge className="mb-3 px-3 py-1" variant={"outline"}>
                  {post.category?.title}
                </Badge> */}
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
    </CommonMotionBox>
  );
};

export default LatestPostSection;
