import { assetImageQuery, metaTagsQuery } from "./common";

const commonQuery = `
    avatar ${assetImageQuery}
    id
    title
    name
    role
    slug
    socials {
      icon
      href
      id
    }
`;

export const membersQuery = `
query MembersQuery($orderBy: MemberOrderByInput) {
  members(stage: PUBLISHED, orderBy: $orderBy) {
    ${commonQuery}
  }
}
`;

export const memberQuery = `
query MemberQuery($slug: String = "") {
  member(stage: PUBLISHED, where: {slug: $slug}) {
    ${commonQuery}
    about {
      html
    }
    metaTags ${metaTagsQuery}
  }
}
`;
