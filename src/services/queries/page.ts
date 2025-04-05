import { metaTagsQuery } from "./common";

const commonQuery = `
title
slug
`;

export const pagesQuery = `
query PagesQuery {
  pages(stage: PUBLISHED) {
    ${commonQuery}
  }
}
`;

export const pageQuery = `
query PageQuery($slug: String = "") {
  page(where: {slug: $slug}, stage: PUBLISHED) {
    ${commonQuery}
    description
    content {
      html
    }
    metaTags ${metaTagsQuery}
  }
}
`;
