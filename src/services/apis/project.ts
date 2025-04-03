import { TProject } from "@/types/cms/project";
import { asyncWrapper, cmsFetch } from "../common";
import {
  projectQuery,
  projectsQuery,
  projectsQueryWithFeatured,
} from "../queries/project";

// ----------------------------------------------------------------------

export const projectServiceTags = {
  projects: "projects",
  projectsFeatured: "projects-featured",
  project: (slug: string) => `project-${slug}`,
};

// ----------------------------------------------------------------------

export const getProjects = asyncWrapper<TProject[]>(async () => {
  const response = await cmsFetch<{ projects: TProject[] }>({
    body: JSON.stringify({
      query: projectsQuery,
    }),
    next: { tags: [projectServiceTags.projects] },
  });

  return response?.projects || [];
});

export const getFeaturedProjects = asyncWrapper<
  TProject[],
  [boolean | undefined]
>(async (isFeatured) => {
  const response = await cmsFetch<{ projects: TProject[] }>({
    body: JSON.stringify({
      query: projectsQueryWithFeatured,
      variables: { featured: isFeatured },
    }),
    next: { tags: [projectServiceTags.projectsFeatured] },
  });

  return response?.projects || [];
});

export const getProject = asyncWrapper<TProject, [string]>(async (slug) => {
  const response = await cmsFetch<{ project: TProject }>({
    body: JSON.stringify({
      query: projectQuery,
      variables: { slug },
    }),
    next: { tags: [projectServiceTags.project(slug)] },
  });

  return response?.project || null;
});
