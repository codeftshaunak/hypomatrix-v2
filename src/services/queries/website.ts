export const websiteQuery = `
query Website($id: String) {
  website(stage: PUBLISHED, where: {id: $id}) {
    id
  }
}
`;
