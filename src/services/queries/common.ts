export const assetImageQuery = `
{
  width
  url
  height
}
`;

export const metaTagsQuery = `
{
  title
  index
  follow
  description
  ogImage ${assetImageQuery}
}
`;
