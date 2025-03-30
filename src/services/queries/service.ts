const commonQuery = `
    id
    description
    category
    completeProjects
    icon {
      width
      url
      height
    }
    slug
    steps {
      title
      id
      description
      image {
        url
        width
        height
      }
    }
    successRate
    thumbnail {
      width
      url
      height
    }
    title
`;

export const servicesQuery = `
query ServicesQuery {
  services(stage: PUBLISHED) {
    ${commonQuery}
  }
}
`;

export const serviceQuery = `
query ServiceQuery($slug: String = "") {
  service(stage: PUBLISHED, where: {slug: $slug}) {
    ${commonQuery}
    content {
      html
    }
  }
}
`;
