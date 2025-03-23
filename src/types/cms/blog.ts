import { TAsset } from "./common";
import { TTeam } from "./team";

export type TBlogPost = {
  id: string;
  slug: string;
  cover: TAsset;
  title: string;
  description: string;
  category: TBlogCategory | null;
  content: { html: string }; // rich text
  author: TTeam | null;
  publishDate: string; // ISO timestamp
  tags: string[];
};

export type TBlogCategory = {
  id: string;
  title: string;
  description: string;
  posts: Omit<TBlogPost, "category">[]; // Prevents circular reference
};
