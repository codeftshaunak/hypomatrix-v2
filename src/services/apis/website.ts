import { TWebsite } from "@/types/cms/website";
import { asyncWrapper, cmsFetch } from "../queries/common";
import { ServiceResponseType } from "../queries/types";
import { websiteQuery } from "../queries/website";

export const getWebsite = asyncWrapper<TWebsite>(async () => {
  const response = await cmsFetch({
    body: JSON.stringify({
      query: websiteQuery,
      variables: { id: process.env.CMS_WEBSITE_ID },
    }),
    next: { tags: ["website"] },
  });

  const json: ServiceResponseType<{ website: TWebsite }> =
    await response.json();

  if (json.errors?.length) {
    throw json.errors;
  }

  return json?.data?.website || null;
});
