import { TService } from "@/types/cms/service";

export const services: TService[] = [
  {
    id: "1",
    image: {
      url: "https://picsum.photos/800/600?random=1",
      width: 800,
      height: 600,
    },
    icon: {
      url: "/assets/service/website-development.svg",
      width: 50,
      height: 50,
    },
    slug: "website-development",
    title: "Website Development",
    category: "Development",
    description:
      "We create responsive, user-friendly websites tailored to your brand, ensuring seamless functionality and optimized design.",
    completeProjects: 120,
    successRate: 98,
    content: {
      html: `
        <p>Our team specializes in crafting engaging, fully responsive, and SEO-friendly websites to boost your brand's online presence.</p>
        <ul>
          <li>Custom website design & development</li>
          <li>Mobile-friendly and responsive layouts</li>
          <li>SEO-optimized and high-speed performance</li>
          <li>Integration with third-party tools</li>
        </ul>
        <p>Let us bring your vision to life with a seamless digital experience.</p>
      `,
    },
    steps: [
      {
        id: "1",
        title: "Research & Strategy",
        description:
          "Understanding your brand, audience, and objectives to plan the perfect website.",
        image: "https://picsum.photos/600/400?random=11",
      },
      {
        id: "2",
        title: "Design & Development",
        description:
          "Creating a visually appealing and functional website tailored to your needs.",
        image: "https://picsum.photos/600/400?random=12",
      },
      {
        id: "3",
        title: "Testing & Deployment",
        description:
          "Ensuring performance, security, and smooth deployment to make your site live.",
        image: "https://picsum.photos/600/400?random=13",
      },
    ],
  },
  {
    id: "2",
    image: {
      url: "https://picsum.photos/800/600?random=2",
      width: 800,
      height: 600,
    },
    icon: {
      url: "/assets/service/branding.svg",
      width: 50,
      height: 50,
    },
    slug: "branding-identity",
    title: "Creative Branding & Identity",
    category: "Branding",
    description:
      "We design distinctive branding and visual identities that connect with your audience, boosting brand recognition.",
    completeProjects: 85,
    successRate: 95,
    content: {
      html: `
        <h2>Stand Out with a Strong Brand Identity</h2>
        <p>Your brand identity is the first thing customers notice. We create compelling visuals and branding elements to set you apart.</p>
        <h3>Our Branding Services:</h3>
        <ul>
          <li>Logo & Visual Identity</li>
          <li>Brand Strategy & Positioning</li>
          <li>Typography & Color Palette</li>
          <li>Marketing & Packaging Design</li>
        </ul>
        <p>We ensure that your brand leaves a lasting impression on your audience.</p>
      `,
    },
    steps: [
      {
        id: "1",
        title: "Brand Research",
        description:
          "Understanding your business, market, and competitors to define a unique identity.",
        image: "https://picsum.photos/600/400?random=21",
      },
      {
        id: "2",
        title: "Visual Concept & Design",
        description:
          "Developing creative concepts and visual elements that represent your brand.",
        image: "https://picsum.photos/600/400?random=22",
      },
      {
        id: "3",
        title: "Brand Implementation",
        description:
          "Ensuring consistency across all platforms, from digital to print.",
        image: "https://picsum.photos/600/400?random=23",
      },
    ],
  },
  {
    id: "3",
    image: {
      url: "https://picsum.photos/800/600?random=3",
      width: 800,
      height: 600,
    },
    icon: {
      url: "/assets/service/photography.svg",
      width: 50,
      height: 50,
    },
    slug: "photography-videography",
    title: "Photography & Videography",
    category: "Media",
    description:
      "We capture stunning photography and engaging videography, telling your brand’s story with creativity, authenticity, and visual appeal.",
    completeProjects: 60,
    successRate: 93,
    content: {
      html: `
        <h2>Bring Your Brand to Life with Visual Storytelling</h2>
        <p>Our photography and videography services help brands tell compelling stories through high-quality visuals.</p>
        <h3>Our Services Include:</h3>
        <ul>
          <li>Professional photography for products, events, and lifestyle</li>
          <li>High-quality video production</li>
          <li>Post-production editing & effects</li>
          <li>Social media & advertising content</li>
        </ul>
        <p>We ensure your visuals reflect your brand’s personality and captivate your audience.</p>
      `,
    },
    steps: [
      {
        id: "1",
        title: "Concept Planning",
        description: "Defining the vision, style, and purpose of the shoot.",
        image: "https://picsum.photos/600/400?random=31",
      },
      {
        id: "2",
        title: "Shooting & Production",
        description:
          "Capturing high-quality visuals with professional equipment.",
        image: "https://picsum.photos/600/400?random=32",
      },
      {
        id: "3",
        title: "Editing & Delivery",
        description:
          "Enhancing visuals through editing and delivering the final product.",
        image: "https://picsum.photos/600/400?random=33",
      },
    ],
  },
];
