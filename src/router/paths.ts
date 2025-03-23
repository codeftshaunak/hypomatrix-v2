const paths = {
  root: "/",
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
};

export default paths;
