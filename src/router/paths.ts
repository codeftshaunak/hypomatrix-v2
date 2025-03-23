const paths = {
  root: "/",
  portfolio: {
    root: "/portfolio",
    details: (slug: string) => `/portfolio/${slug}`,
  },
};

export default paths;
