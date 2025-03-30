const commonQuery = `
title
slug

`;

export const pagesQuery = `
query PagesQuery {
  ${commonQuery}
}
`;

export const pageQuery = `
query PageQuery($slug: String = "") {
  page(where: {slug: $slug}, stage: PUBLISHED) {
    ${commonQuery}
    description
  }
}
`;
