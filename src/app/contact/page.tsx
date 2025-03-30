import { getPage } from "@/services/apis/page";
import ContactView from "@/views/contact";
import { notFound } from "next/navigation";

const ContactPage = async () => {
  const pageRes = await getPage("contact");

  if (!pageRes.data) {
    notFound();
  }

  return (
    <>
      <ContactView page={pageRes.data} />
    </>
  );
};

export default ContactPage;
