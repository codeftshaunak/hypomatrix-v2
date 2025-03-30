import { getPage } from "@/services/apis/page";
import FaqView from "@/views/faq";
import { notFound } from "next/navigation";

const FaqPage = async () => {
  const pageRes = await getPage("faq");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <FaqView page={pageRes.data} />
    </>
  );
};

export default FaqPage;
