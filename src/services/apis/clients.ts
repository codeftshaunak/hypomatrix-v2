import { asyncWrapper, cmsFetch } from "../common";
import { clientQuery } from "../queries/clients";
import { TClient } from "@/types/cms/clients";

export const getClients = asyncWrapper<TClient[]>(async () => {
  const response = await cmsFetch<{ clients: TClient[] }>({
    body: JSON.stringify({
      query: clientQuery,
    }),
    next: { tags: ["clients"] },
  });

  return response?.clients || [];
});
