export type LinkItem = {
  title: string;
  href: string;
};

export type LinkItemDropdown = {
  title: string;
  items: LinkItem[];
};

export type Link = LinkItem | LinkItemDropdown;

// Desktop Links ----------------------------------------------------------------------

export const desktopLinks: Link[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Pages",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Our Services", href: "/service" },
      { title: "Service Details", href: "/service-details" },
      { title: "Our Team", href: "/our-team" },
      { title: "Team Details", href: "/team-details" },
      { title: "Pricing", href: "/pricing" },
      { title: "FAQS", href: "/faqs" },
      { title: "Contact Us", href: "/contact" },
      { title: "404", href: "/404" },
    ],
  },
  {
    title: "Portfolio",
    items: [
      { title: "Web Design", href: "/web-design" },
      { title: "Graphic Design", href: "/graphic-design" },
      { title: "UI/UX", href: "/ui-ux" },
      { title: "Branding", href: "/branding" },
    ],
  },
  {
    title: "Blogs",
    items: [
      { title: "Latest News", href: "/latest-news" },
      { title: "Technology", href: "/technology" },
      { title: "Business", href: "/business" },
      { title: "Lifestyle", href: "/lifestyle" },
    ],
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

// ----------------------------------------------------------------------
