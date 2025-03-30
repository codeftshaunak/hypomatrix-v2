export const faqsQuery = `
query FaqsQuery {
  faqs(stage: PUBLISHED) {
    answer
    question
  }
}
`;
