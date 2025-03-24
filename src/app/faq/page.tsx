import { faqPage } from "@/db/pages";
import FaqView from "@/views/faq";

const page = () => {
  return (
    <>
      <FaqView page={faqPage} />
    </>
  );
};

export default page;
