import { metaTagsQuery } from "./common";

export const websiteQuery = `
query Website($id: ID) {
  website(stage: PUBLISHED, where: {id: $id}) {
    id
    title
    phones
    navLinks {
      ... on Link {
        id
        href
        newTab
        title
      }
      ... on LinkGroup {
        id
        title
        links {
          href
          id
          newTab
          title
        }
      }
    }
    quickLinks {
      id
      href
      newTab
      title
    }
    legalLinks {
      id
      href
      newTab
      title
    }
    socials {
      href
      icon
      id
    }
    emails
    description
    addresses
    workSteps {
      title
      description
      image {
        url
        width
        height
      }
    }
    metaTags ${metaTagsQuery}
  }
}
`;
