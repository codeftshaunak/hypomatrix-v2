import { TProject } from "@/types/cms/project";

export const projects: TProject[] = [
  {
    id: "1",
    slug: "banking-financial-mobile-apps",
    thumbnail: {
      url: "/assets/project/project1.jpg",
      width: 800,
      height: 600,
    },
    title: "Banking & Financial Mobile Apps",
    category: "Branding",
    client: "FinTech Corp",
    content: {
      html: `
        <h2>Secure & User-Friendly Banking Apps</h2>
        <p>We specialize in developing highly secure and user-friendly banking applications. Our apps streamline financial services, ensuring a seamless experience for users.</p>
        <ul>
          <li>Real-time transaction tracking</li>
          <li>Advanced security features</li>
          <li>AI-powered financial insights</li>
        </ul>
        <p>With a focus on UI/UX, our team ensures a smooth and engaging banking experience.</p>
      `,
    },
    description:
      "We develop secure, user-friendly banking apps, streamlining financial services.",
    images: [
      {
        url: "/assets/project/project1.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/assets/project/project2.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/assets/project/project3.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/assets/project/project1.jpg",
        width: 800,
        height: 600,
      },
    ],
    startDate: "2024-01-01T00:00:00.000Z",
    endDate: "2024-06-01T00:00:00.000Z",
    tags: ["Website", "Landing Page", "UI/UX"],
    cardSize: "wide",
  },
  {
    id: "2",
    slug: "knead-that-dough-brand-identity",
    thumbnail: {
      url: "/assets/project/project2.jpg",
      width: 800,
      height: 600,
    },
    title: "Knead That Dough Brand Identity",
    category: "Digital Marketing",
    client: "Knead That Dough",
    content: {
      html: `
        <h2>Branding a Fresh Bakery Experience</h2>
        <p>We crafted a vibrant brand identity for Knead That Dough, a bakery focused on fresh, homemade bread.</p>
        <blockquote>“The branding truly represents our artisan craftsmanship.” – Knead That Dough CEO</blockquote>
        <h3>What We Delivered:</h3>
        <ul>
          <li>Logo & Brand Identity</li>
          <li>Website & Digital Presence</li>
          <li>Social Media Campaigns</li>
        </ul>
      `,
    },
    description:
      "Crafting a fresh, vibrant brand identity for Knead That Dough.",
    images: [
      {
        url: "/assets/project/project2.jpg",
        width: 800,
        height: 600,
      },
    ],
    startDate: "2023-11-15T00:00:00.000Z",
    endDate: "2024-03-15T00:00:00.000Z",
    tags: ["Website", "Landing Page", "UI/UX"],
    cardSize: "tall",
  },
  {
    id: "3",
    slug: "software-agency-website-header",
    thumbnail: {
      url: "/assets/project/project3.jpg",
      width: 800,
      height: 600,
    },
    title: "Software Agency Website Header",
    category: "Web Design",
    client: "Tech Solutions",
    content: {
      html: `
        <h2>Elevating Software Agencies with Stunning Web Design</h2>
        <p>We built an intuitive and visually appealing website header for Tech Solutions, improving engagement and navigation.</p>
        <h3>Key Features:</h3>
        <ul>
          <li>Modern UI elements</li>
          <li>Mobile-first responsive design</li>
          <li>Interactive call-to-action sections</li>
        </ul>
        <p>Our design enhanced user experience and increased conversion rates.</p>
      `,
    },
    description:
      "Building innovative software solutions to drive your business forward.",
    images: [
      {
        url: "/assets/project/project3.jpg",
        width: 800,
        height: 600,
      },
    ],
    startDate: "2023-12-01T00:00:00.000Z",
    endDate: "2024-04-01T00:00:00.000Z",
    tags: ["Website", "Landing Page", "UI/UX"],
    cardSize: "tall",
  },
  {
    id: "4",
    slug: "crypto-tap-wallet-mobile-apps",
    thumbnail: {
      url: "/assets/project/project1.jpg",
      width: 800,
      height: 600,
    },
    title: "Crypto Tap Wallet Mobile Apps",
    category: "Development",
    client: "BlockchainX",
    content: {
      html: `
        <h2>A Secure & Fast Crypto Wallet</h2>
        <p>Crypto Tap Wallet is a cutting-edge solution for managing digital assets securely and efficiently.</p>
        <h3>Core Features:</h3>
        <ul>
          <li>Instant transactions with low fees</li>
          <li>Biometric authentication for security</li>
          <li>Multi-currency support</li>
        </ul>
        <p>Built with advanced encryption and a seamless UI, our app ensures a smooth crypto experience.</p>
      `,
    },
    description:
      "Secure, fast, and user-friendly crypto wallet for seamless transactions.",
    images: [
      {
        url: "/assets/project/project1.jpg",
        width: 800,
        height: 600,
      },
    ],
    startDate: "2024-02-01T00:00:00.000Z",
    endDate: "2024-07-01T00:00:00.000Z",
    tags: ["Website", "Landing Page", "UI/UX"],
    cardSize: "tall",
  },
];
