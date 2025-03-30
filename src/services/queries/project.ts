const commonProjectQuery = `
    cardSize
    category
    client
    description
    endDate
    id
    images {
      width
      url
      height
    }
    slug
    startDate
    tags
    thumbnail {
      url
      width
      height
    }
    title
`;

export const projectsQueryWithFeatured = `
query ProjectsQuery($featured: Boolean = false) {
  projects(stage: PUBLISHED, where: {featured: $featured}) {
    ${commonProjectQuery}
  }
}
`;

export const projectsQuery = `
query ProjectsQuery {
  projects(stage: PUBLISHED) {
    ${commonProjectQuery}
  }
}
`;

export const projectQuery = `
query ProjectsQuery($slug: String = "") {
  project(stage: PUBLISHED, where: {slug: $slug}) {
    ${commonProjectQuery}
    content {
      html
    }
  }
}
`;
