import BlogPostCard from "@/components/cards/blog-post-card";
import { TBlogPost } from "@/types/cms/blog";

type Props = {
  posts: TBlogPost[];
};

const PostsWrapper = (props: Props) => {
  const { posts } = props;
  return (
    <div className="grid @lg/feed:grid-cols-2 gap-x-6 gap-y-12">
      {posts.map((post, index) => (
        <BlogPostCard data={post} key={index} variant="grid" />
      ))}
    </div>
  );
};

export default PostsWrapper;
