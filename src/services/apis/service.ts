import { TService } from "@/types/cms/service";
import { asyncWrapper, cmsFetch } from "../common";
import { servicesQuery } from "../queries/service";

export const getServices = asyncWrapper<TService[]>(async () => {
  const response = await cmsFetch<{ services: TService[] }>({
    body: JSON.stringify({
      query: servicesQuery,
    }),
    next: { tags: ["services"] },
  });

  return response?.services || [];
});

export const getService = asyncWrapper<TService, [string]>(async (slug) => {
  const response = await cmsFetch<{ service: TService }>({
    body: JSON.stringify({
      query: servicesQuery,
      variables: { slug },
    }),
    next: { tags: [`service-${slug}`] },
  });

  return response?.service || null;
});
