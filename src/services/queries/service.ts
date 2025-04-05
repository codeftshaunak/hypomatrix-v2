import { assetImageQuery, metaTagsQuery } from "./common";

const commonQuery = `
    id
    description
    category
    completeProjects
    icon ${assetImageQuery}
    slug
    steps {
      title
      id
      description
      image ${assetImageQuery}
    }
    successRate
    thumbnail ${assetImageQuery}
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
    metaTags ${metaTagsQuery}
  }
}
`;
