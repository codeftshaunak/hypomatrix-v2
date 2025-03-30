import { TMember } from "@/types/cms/team";
import { asyncWrapper, cmsFetch } from "../common";
import { memberQuery, membersQuery } from "../queries/member";

export const getMembers = asyncWrapper<TMember[]>(async () => {
  const response = await cmsFetch<{ members: TMember[] }>({
    body: JSON.stringify({
      query: membersQuery,
    }),
    next: { tags: ["members"] },
  });

  return response?.members || [];
});

export const getMember = asyncWrapper<TMember, [string]>(async (slug) => {
  const response = await cmsFetch<{ member: TMember }>({
    body: JSON.stringify({
      query: memberQuery,
      variables: { slug },
    }),
    next: { tags: [`member-${slug}`] },
  });

  return response?.member || null;
});
