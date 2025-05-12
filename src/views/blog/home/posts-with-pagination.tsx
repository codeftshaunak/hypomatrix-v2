"use client";

import { TBlogPost } from "@/types/cms/blog";
import { useSearchParams } from "next/navigation";
import PostsWrapper from "./posts-wrapper";

type Props = {
  posts: TBlogPost[];
  limit: number;
};

const PostsWithPagination = (props: Props) => {
  const { posts, limit } = props;
  const searchParams = useSearchParams();
  const urlPage = parseInt(searchParams.get("page") || "1", 10);
  const page = Number.isNaN(urlPage) ? 1 : urlPage;

  const filteredPosts = posts.slice((page - 1) * limit, limit * page);

  return <PostsWrapper posts={filteredPosts} />;
};

export default PostsWithPagination;
