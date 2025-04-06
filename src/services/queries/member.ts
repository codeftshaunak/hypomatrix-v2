import { assetImageQuery, metaTagsQuery } from "./common";

const commonQuery = `
    avatar ${assetImageQuery}
    id
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
query MembersQuery {
  members(stage: PUBLISHED) {
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
