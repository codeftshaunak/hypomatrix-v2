import { TClient } from "@/types/cms/clients";
import { asyncWrapper, cmsFetch } from "../common";
import { clientQuery } from "../queries/clients";

// ----------------------------------------------------------------------

export const clientServiceTags = {
  clients: "clients",
};

// ----------------------------------------------------------------------

export const getClients = asyncWrapper<TClient[]>(async () => {
  const response = await cmsFetch<{ clients: TClient[] }>({
    body: JSON.stringify({
      query: clientQuery,
    }),
    next: { tags: [clientServiceTags.clients] },
  });

  return response?.clients || [];
});
