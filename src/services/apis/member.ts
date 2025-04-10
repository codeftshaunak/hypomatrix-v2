import { TMember } from "@/types/cms/team";
import { asyncWrapper, cmsFetch } from "../common";
import { memberQuery, membersQuery } from "../queries/member";

// ----------------------------------------------------------------------

export const memberServiceTags = {
  members: "members",
  member: (slug: string) => `member-${slug}`,
};

// ----------------------------------------------------------------------
type orderBy = "order_ASC" | "order_DESC" | "name_ASC" | "name_DESC";

export const getMembers = asyncWrapper<TMember[], [orderBy | null]>(
  async (orderBy = null) => {
    const response = await cmsFetch<{ members: TMember[] }>({
      body: JSON.stringify({
        query: membersQuery,
        variables: { orderBy },
      }),
      next: { tags: [memberServiceTags.members] },
    });

    return response?.members || [];
  }
);

export const getMember = asyncWrapper<TMember, [string]>(async (slug) => {
  const response = await cmsFetch<{ member: TMember }>({
    body: JSON.stringify({
      query: memberQuery,
      variables: { slug },
    }),
    next: { tags: [memberServiceTags.member(slug)] },
  });

  return response?.member || null;
});
