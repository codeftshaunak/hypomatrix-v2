import { getPage } from "@/services/apis/page";
import AboutView from "@/views/about";
import { notFound } from "next/navigation";

type Props = {};

const AboutPage = async (props: Props) => {
  const pageRes = await getPage("about");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <AboutView page={pageRes.data} />
    </>
  );
};

export default AboutPage;
