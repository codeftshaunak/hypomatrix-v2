import { TBlogCategory, TBlogPost } from "@/types/cms/blog";
import { members } from "./team";

export const blogCategories: TBlogCategory[] = [
  {
    id: "1",
    title: "Web Development",
    slug: "web-development",
    description: "Latest trends, tutorials, and insights on web development.",
    posts: [],
  },
  {
    id: "2",
    title: "JavaScript",
    slug: "javascript",
    description: "Deep dive into JavaScript, frameworks, and best practices.",
    posts: [],
  },
  {
    id: "3",
    title: "Frontend Frameworks",
    slug: "frontend-frameworks",
    description: "Explore React, Vue, Svelte, and other frontend technologies.",
    posts: [],
  },
  {
    id: "4",
    title: "Backend Development",
    slug: "backend-development",
    description:
      "Learn about Node.js, databases, APIs, and server-side technologies.",
    posts: [],
  },
  {
    id: "5",
    title: "DevOps & Deployment",
    slug: "devops-deployment",
    description:
      "CI/CD, containerization, cloud hosting, and deployment strategies.",
    posts: [],
  },
  {
    id: "6",
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description:
      "Explore artificial intelligence, ML models, and applications.",
    posts: [],
  },
  {
    id: "7",
    title: "Cybersecurity",
    slug: "cybersecurity",
    description:
      "Best practices, vulnerabilities, and security tips for developers.",
    posts: [],
  },
  {
    id: "8",
    title: "Software Architecture",
    slug: "software-architecture",
    description:
      "Scalable system design, microservices, and architectural patterns.",
    posts: [],
  },
];

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
    category: blogCategories[0],
    content: {
      html: `<p>Artificial intelligence is no longer a futuristic concept; it's here and making a massive impact...</p>`,
    },
    author: members[0],
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
    category: blogCategories[1],
    content: {
      html: `<p>Web development is evolving rapidly with new frameworks and tools emerging each year...</p>`,
    },
    author: members[1],
    publishDate: "2025-03-20T10:30:00Z",
    tags: ["Web Development", "JavaScript", "Next.js"],
  },
];
