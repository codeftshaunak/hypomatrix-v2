import { TFaq } from "@/types/cms/faq";
import { asyncWrapper, cmsFetch } from "../common";
import { faqsQuery } from "../queries/faq";

// ----------------------------------------------------------------------

export const faqServiceTags = {
  faqs: "faqs",
};

// ----------------------------------------------------------------------

export const getFaqs = asyncWrapper<TFaq[]>(async () => {
  const response = await cmsFetch<{ faqs: TFaq[] }>({
    body: JSON.stringify({
      query: faqsQuery,
    }),
    next: { tags: [faqServiceTags.faqs] },
  });

  return response?.faqs || [];
});
