import paths from "@/router/paths";
import { getPage } from "@/services/apis/page";
import { generatePageMetadata } from "@/utils/page-metadata";
import ProjectsView from "@/views/projects";
import { Metadata } from "next";
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

// ----------------------------------------------------------------------

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getPage("portfolio");

  if (!data) {
    return {};
  }

  return {
    ...generatePageMetadata(data?.metaTags, paths.portfolio.root),
  };
};
