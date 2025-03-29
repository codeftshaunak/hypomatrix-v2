const paths = {
  root: "/",
  about: "/about",
  contact: "/contact",
  faq: "/faq",
  portfolio: {
    root: "/portfolio",
    details: (slug: string) => `/portfolio/${slug}`,
  },
  services: {
    root: "/services",
    details: (slug: string) => `/services/${slug}`,
  },
  team: {
    root: "/team",
    details: (slug: string) => `/team/${slug}`,
  },
  blog: {
    root: "/blog",
    details: (slug: string) => `/blog/${slug}`,
    category: (slug: string) => `/blog/category/${slug}`,
  },
};

export default paths;
