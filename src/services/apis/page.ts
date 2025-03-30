import { TPage } from "@/types/cms/page";
import { asyncWrapper, cmsFetch } from "../common";
import { pageQuery, pagesQuery } from "../queries/page";

export const getPages = asyncWrapper<TPage[]>(async () => {
  const response = await cmsFetch<{ pages: TPage[] }>({
    body: JSON.stringify({
      query: pagesQuery,
    }),
    next: { tags: ["pages"] },
  });

  return response?.pages || [];
});

export const getPage = asyncWrapper<TPage, [string]>(async (slug) => {
  const response = await cmsFetch<{ page: TPage }>({
    body: JSON.stringify({
      query: pageQuery,
      variables: { slug },
    }),
    next: { tags: [`page-${slug}`] },
  });

  return response?.page || null;
});
