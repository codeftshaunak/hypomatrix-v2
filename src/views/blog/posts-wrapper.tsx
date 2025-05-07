import BlogPostCard from "@/components/cards/blog-post-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TBlogPost } from "@/types/cms/blog";
import { ArrowRightIcon, LucideFile } from "lucide-react";
import Link from "next/link";

type Props = {
  posts: TBlogPost[];
};

const PostsWrapper = (props: Props) => {
  const { posts } = props;

  return (
    <div>
      {!posts || posts.length === 0 ? (
        <Card className="py-10">
          <CardContent className="items-center flex flex-col">
            <LucideFile size={48} className="mb-4" />
            <h4 className="text-2xl font-bold mb-2">No Posts Yet</h4>
            <p className="mb-8 text-lg max-w-md text-center text-muted-foreground">
              There are no posts to display right now. Please check back later
              for new content.
            </p>
            <Button size={"xl"} asChild variant={"outline"}>
              <Link href="/blog">
                Back to the blog <ArrowRightIcon />
              </Link>
            </Button>
          </CardContent>
        </Card>
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
