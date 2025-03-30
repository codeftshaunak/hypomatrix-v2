import { getPage, getPages } from "@/services/apis/page";
import PageDetailsView from "@/views/page-details";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};

async function PageDetails(props: Props) {
  const { slug } = await props.params;
  const pageRes = await getPage(slug);

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <PageDetailsView page={pageRes.data} />
    </>
  );
}

export default PageDetails;

// ----------------------------------------------------------------------

export async function generateStaticParams() {
  const dataRes = await getPages();

  if (!dataRes.data) {
    return [];
  }

  return dataRes.data.map((item) => ({
    slug: item.slug,
  }));
}
