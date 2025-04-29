import BlogPostCard from "@/components/cards/blog-post-card";
import { TBlogPost } from "@/types/cms/blog";
import img from "@/assets/404.png";
import Image from "next/image";
import Link from "next/link";
import CommonMotionBox from "@/lib/motion/common-motion";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  posts: TBlogPost[];
};

const PostsWrapper = (props: Props) => {
  const { posts } = props;

  return (
    <div>
      {!posts || posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center bg-[#18191b] text-white py-28 px-4 space-y-2">
          <Image src={img} alt="404 Error" className="w-[200px] md:w-auto" />
          <p className="mt-4 text-lg font-bold font-sans text-heading-4 text-center">
            The blog you are looking for doesn’t exist
          </p>
          <Link href="/blog">
            <button className="mt-6 px-6 py-3 bg-primary text-black text-heading-6 font-semibold rounded-full transition cursor-pointer flex items-center gap-1">
              Back To The Blog
              <ArrowRightIcon size={20} />
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid @lg/feed:grid-cols-2 gap-x-6 gap-y-12">
          {posts.map((post, index) => (
            <BlogPostCard data={post} key={index} variant="grid" />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsWrapper;
