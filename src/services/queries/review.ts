const commonQuery = `
avatar {
  width
  url
  height
}
company
id
name
position
quote
rating
`;

export const reviewsQuery = `
query ReviewsQuery {
  reviews(stage: PUBLISHED) {
    ${commonQuery}
  }
}
`;
