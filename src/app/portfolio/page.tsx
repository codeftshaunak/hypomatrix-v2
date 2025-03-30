import { getPage } from "@/services/apis/page";
import ProjectsView from "@/views/projects";
import { notFound } from "next/navigation";

type Props = {};

const PortfolioPage = async (props: Props) => {
  const pageRes = await getPage("portfolio");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <ProjectsView page={pageRes.data} />
    </>
  );
};

export default PortfolioPage;
