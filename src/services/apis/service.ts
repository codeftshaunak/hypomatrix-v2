import { TService } from "@/types/cms/service";
import { asyncWrapper, cmsFetch } from "../common";
import { serviceQuery, servicesQuery } from "../queries/service";

// ----------------------------------------------------------------------

export const serviceServiceTags = {
  services: "services",
  service: (slug: string) => `service-${slug}`,
};

// ----------------------------------------------------------------------

export const getServices = asyncWrapper<TService[]>(async () => {
  const response = await cmsFetch<{ services: TService[] }>({
    body: JSON.stringify({
      query: servicesQuery,
    }),
    next: { tags: [serviceServiceTags.services] },
  });

  return response?.services || [];
});

export const getService = asyncWrapper<TService, [string]>(async (slug) => {
  const response = await cmsFetch<{ service: TService }>({
    body: JSON.stringify({
      query: serviceQuery,
      variables: { slug },
    }),
    next: { tags: [serviceServiceTags.service(slug)] },
  });

  return response?.service || null;
});
