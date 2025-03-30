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
thumbnail {
  width
  url
  height
}
title
author {
  name
  slug
}
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
  blogPosts(stage: PUBLISHED, where: {featured: $featured})
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
  }
}
`;
