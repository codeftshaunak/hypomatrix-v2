import { TReview } from "@/types/cms/review";
import { asyncWrapper, cmsFetch } from "../common";
import { reviewsQuery } from "../queries/review";

export const getReviews = asyncWrapper<TReview[]>(async () => {
  const response = await cmsFetch<{ reviews: TReview[] }>({
    body: JSON.stringify({
      query: reviewsQuery,
    }),
    next: { tags: ["reviews"] },
  });

  return response?.reviews || [];
});
