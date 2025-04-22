import { asyncWrapper, cmsFetch } from "../common";
import { TCompany } from "@/types/cms/company";
import { companyQuery } from "../queries/company";

// ----------------------------------------------------------------------

export const companyServiceTags = {
  companies: "companies",
};

// ----------------------------------------------------------------------

export const getCompany = asyncWrapper<TCompany[]>(async () => {
  const response = await cmsFetch<{ companies: TCompany[] }>({
    body: JSON.stringify({
      query: companyQuery,
    }),
    next: { tags: [companyServiceTags.companies] },
  });

  return response?.companies || [];
});
