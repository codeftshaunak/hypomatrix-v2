import { TBlogPost } from "@/types/cms/blog";

export const blogPosts: TBlogPost[] = [
  {
    id: "1",
    slug: "ai-transforming-business",
    cover: {
      url: "https://picsum.photos/800/500?random=1",
      width: 800,
      height: 500,
    },
    title: "How AI is Transforming Modern Businesses",
    description:
      "Explore how artificial intelligence is reshaping industries and driving innovation worldwide.",
    category: {
      id: "tech",
      title: "Technology",
      description: "Latest trends and innovations in the tech industry.",
      posts: [],
    },
    content: {
      html: `<p>Artificial intelligence is no longer a futuristic concept; it's here and making a massive impact...</p>`,
    },
    author: null,
    publishDate: "2025-03-23T12:00:00Z",
    tags: ["AI", "Business", "Technology"],
  },
  {
    id: "2",
    slug: "future-of-web-development",
    cover: {
      url: "https://picsum.photos/800/500?random=2",
      width: 800,
      height: 500,
    },
    title: "The Future of Web Development in 2025",
    description:
      "Discover upcoming web technologies and frameworks that will dominate in the next few years.",
    category: {
      id: "web-dev",
      title: "Web Development",
      description: "Insights into modern web development trends.",
      posts: [],
    },
    content: {
      html: `<p>Web development is evolving rapidly with new frameworks and tools emerging each year...</p>`,
    },
    author: null,
    publishDate: "2025-03-20T10:30:00Z",
    tags: ["Web Development", "JavaScript", "Next.js"],
  },
];
