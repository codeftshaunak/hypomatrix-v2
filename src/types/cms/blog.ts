import { TAsset } from "./common";
import { TMember } from "./team";

export type TBlogPost = {
  id: string;
  slug: string;
  cover: TAsset;
  title: string;
  description: string;
  category: TBlogCategory | null;
  content: { html: string }; // rich text
  author: TMember | null;
  publishDate: string; // ISO timestamp
  tags: string[];
};

export type TBlogCategory = {
  id: string;
  title: string;
  slug: string;
  description: string;
  posts: Omit<TBlogPost, "category">[]; // Prevents circular reference
};
