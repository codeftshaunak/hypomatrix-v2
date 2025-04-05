import { assetImageQuery, metaTagsQuery } from "./common";

const categoryCommonQuery = `
slug
title
description
id
`;

export const blogCategoriesQuery = `
query BlogCategoriesQuery {
  blogCategories(stage: PUBLISHED) {
    ${categoryCommonQuery}
  }
}
`;

export const blogCategoryQuery = `
query BlogCategoryQuery($slug: String = "") {
  blogCategory(stage: PUBLISHED, where: {slug: $slug}) {
    ${categoryCommonQuery}
    metaTags ${metaTagsQuery}
  }
}
`;

// ----------------------------------------------------------------------

const postCommonQuery = `
category {
  id
  slug
  title
}
description
id
slug
thumbnail ${assetImageQuery}
title
author {
  name
  slug
}
publishDate
`;

export const blogPostsQuery = `
query BlogPostsQuery {
  blogPosts(stage: PUBLISHED) {
    ${postCommonQuery}
  }
}
`;

export const blogPostsQueryWithFeatured = `
query BlogPostsQuery($featured: Boolean = false) {
  blogPosts(stage: PUBLISHED, where: {featured: $featured}) {
    ${postCommonQuery}
  }
}
`;

export const blogPostQuery = `
query BlogPostQuery($slug: String = "") {
  blogPost(stage: PUBLISHED, where: {slug: $slug}) {
    ${postCommonQuery}
    content {
      html
    }
    tags
    metaTags ${metaTagsQuery}
  }
}
`;
