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
};

export default paths;
