import { TWebsite } from "@/types/cms/website";
import { asyncWrapper, cmsFetch } from "../common";
import { websiteQuery } from "../queries/website";

// ----------------------------------------------------------------------

export const websiteServiceTags = {
  website: "website",
};

// ----------------------------------------------------------------------

export const getWebsite = asyncWrapper<TWebsite>(async () => {
  const response = await cmsFetch<{ website: TWebsite }>({
    body: JSON.stringify({
      query: websiteQuery,
      variables: { id: process.env.CMS_WEBSITE_ID },
    }),
    next: { tags: [websiteServiceTags.website] },
  });

  return response?.website || null;
});
