import { metaTagsQuery } from "./common";

const commonQuery = `
    applicationEndDate
    applyUrl
    contractType
    slug
    workType
    position
    id
    sector
    featured
`;

export const careersQuery = `
query CareersQuery {
  careers(stage: PUBLISHED) {
    ${commonQuery}
  }
}
`;

export const careerQuery = `
query CareerQuery($slug: String = "") {
  career(stage: PUBLISHED, where: {slug: $slug}) {
    ${commonQuery}
    content {
      html
    }
    metaTags ${metaTagsQuery}
  }
}
`;
