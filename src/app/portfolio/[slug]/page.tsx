import { getProject, getProjects } from "@/services/apis/project";
import ProjectDetailsView from "@/views/project-details";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const ProjectDetailsPage = async (props: Props) => {
  const { slug } = await props.params;
  const projectRes = await getProject(slug);

  if (!projectRes.data) {
    notFound();
  }

  return (
    <>
      <ProjectDetailsView project={projectRes.data} />
    </>
  );
};

export default ProjectDetailsPage;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const dataRes = await getProjects();

  if (!dataRes.data) {
    return [];
  }

  return dataRes.data.map((item) => ({
    slug: item.slug,
  }));
}
