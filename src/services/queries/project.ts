import { assetImageQuery, metaTagsQuery } from "./common";

const commonProjectQuery = `
    cardSize
    category
    client
    description
    endDate
    id
    images ${assetImageQuery}
    slug
    startDate
    tags
    thumbnail ${assetImageQuery}
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
    metaTags ${metaTagsQuery}
  }
}
`;
