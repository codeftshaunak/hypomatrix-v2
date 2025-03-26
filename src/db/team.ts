import { TMember } from "@/types/cms/team";

export const members: TMember[] = [
  {
    id: "1",
    slug: "john-doe",
    name: "John Doe",
    avatar: {
      url: "/assets/team/team1.jpg",
      width: 400,
      height: 400,
    },
    role: "Chief Executive Officer",
    about: {
      html: `
        <p>With over 15 years of leadership experience, John has successfully led multiple tech companies to global success. His expertise in business strategy and team building ensures the company stays ahead in innovation.</p>
      `,
    },
    social: [
      { id: "1", icon: "linkedin", href: "https://linkedin.com/in/johndoe" },
      { id: "2", icon: "x", href: "https://twitter.com/johndoe" },
      { id: "3", icon: "github", href: "https://github.com/johndoe" },
    ],
  },
  {
    id: "2",
    slug: "jane-smith",
    name: "Jane Smith",
    avatar: {
      url: "/assets/team/team2.jpg",
      width: 400,
      height: 400,
    },
    role: "Chief Technology Officer",
    about: {
      html: `
        <h2>About Jane Smith</h2>
        <p>Jane is a technology innovator with a deep passion for software development and AI. She leads the engineering team, ensuring our products are at the forefront of technological advancements.</p>
      `,
    },
    social: [
      { id: "1", icon: "linkedin", href: "https://linkedin.com/in/janesmith" },
      { id: "2", icon: "github", href: "https://github.com/janesmith" },
    ],
  },
  {
    id: "3",
    slug: "michael-johnson",
    name: "Michael Johnson",
    avatar: {
      url: "/assets/team/team3.jpg",
      width: 400,
      height: 400,
    },
    role: "Head of Design",
    about: {
      html: `
        <h2>About Michael Johnson</h2>
        <p>Michael crafts exceptional user experiences with his creative vision. He is responsible for the company’s design philosophy and ensuring UI/UX excellence across all projects.</p>
      `,
    },
    social: [
      {
        id: "1",
        icon: "linkedin",
        href: "https://linkedin.com/in/michaeljohnson",
      },
      {
        id: "2",
        icon: "instagram",
        href: "https://instagram.com/michaeljohnson",
      },
    ],
  },
  {
    id: "4",
    slug: "emily-wilson",
    name: "Emily Wilson",
    avatar: {
      url: "/assets/team/team4.jpg",
      width: 400,
      height: 400,
    },
    role: "Marketing Director",
    about: {
      html: `
        <h2>About Emily Wilson</h2>
        <p>Emily is a marketing strategist with a proven track record of driving brand growth. She specializes in digital marketing, content strategy, and social media engagement.</p>
      `,
    },
    social: [
      { id: "1", icon: "facebook", href: "https://facebook.com/emilywilson" },
      {
        id: "2",
        icon: "linkedin",
        href: "https://linkedin.com/in/emilywilson",
      },
    ],
  },
  {
    id: "5",
    slug: "david-brown",
    name: "David Brown",
    avatar: {
      url: "/assets/team/team1.jpg",
      width: 400,
      height: 400,
    },
    role: "Lead Developer",
    about: {
      html: `
        <h2>About David Brown</h2>
        <p>David is a full-stack developer with expertise in modern web technologies. He ensures seamless functionality and performance optimization for our applications.</p>
      `,
    },
    social: [
      { id: "1", icon: "github", href: "https://github.com/davidbrown" },
      { id: "2", icon: "linkedin", href: "https://linkedin.com/in/davidbrown" },
    ],
  },
  {
    id: "6",
    slug: "sophia-miller",
    name: "Sophia Miller",
    avatar: {
      url: "/assets/team/team2.jpg",
      width: 400,
      height: 400,
    },
    role: "Project Manager",
    about: {
      html: `
        <h2>About Sophia Miller</h2>
        <p>Sophia ensures project deadlines are met while maintaining quality. She specializes in agile methodologies and team coordination.</p>
      `,
    },
    social: [
      {
        id: "1",
        icon: "linkedin",
        href: "https://linkedin.com/in/sophiamiller",
      },
    ],
  },
  {
    id: "7",
    slug: "chris-anderson",
    name: "Chris Anderson",
    avatar: {
      url: "/assets/team/team3.jpg",
      width: 400,
      height: 400,
    },
    role: "Cybersecurity Expert",
    about: {
      html: `
        <h2>About Chris Anderson</h2>
        <p>Chris specializes in network security and data protection, ensuring our digital assets remain secure and resilient.</p>
      `,
    },
    social: [
      { id: "1", icon: "x", href: "https://twitter.com/chrisanderson" },
      { id: "2", icon: "github", href: "https://github.com/chrisanderson" },
    ],
  },
  {
    id: "8",
    slug: "olivia-thomas",
    name: "Olivia Thomas",
    avatar: {
      url: "/assets/team/team4.jpg",
      width: 400,
      height: 400,
    },
    role: "Content Strategist",
    about: {
      html: `
        <h2>About Olivia Thomas</h2>
        <p>Olivia is passionate about storytelling and content creation. She develops engaging content strategies that connect with audiences.</p>
      `,
    },
    social: [
      {
        id: "1",
        icon: "instagram",
        href: "https://instagram.com/oliviathomas",
      },
      {
        id: "2",
        icon: "linkedin",
        href: "https://linkedin.com/in/oliviathomas",
      },
    ],
  },
];
