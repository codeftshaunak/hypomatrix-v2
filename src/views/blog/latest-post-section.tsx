import { blogPosts } from "@/db/blog";
import Image from "next/image";

type Props = {};

const LatestPostSection = (props: Props) => {
  return (
    <div className="bg-popover rounded-lg p-6">
      <h3 className="text-heading-4 font-bold mb-4">Latest Posts</h3>
      <div className="space-y-5">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex gap-3 items-center">
            <div className="flex-shrink-0">
              <Image
                src={post.cover.url}
                alt={post.title}
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <span className="text-heading-6 bg-black text-white border border-gray-500 px-2 py-1 rounded-full">
                {post.category?.title}
              </span>
              <h4 className="text-heading-6 font-bold text-white leading-snug mt-4">
                {post.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPostSection;
