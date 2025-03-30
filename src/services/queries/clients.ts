export const clientQuery = `
query ClientQuery {
  clients {
    name
    company
    position
    review
    rating
    id
    logo {
      height
      width
      url
    }
     avatar {
      height
      width
      url
    }
  }
}
`;
