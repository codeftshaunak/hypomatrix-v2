import { contactPage } from "@/db/pages";
import ContactView from "@/views/contact";

const page = () => {
  return (
    <>
      <ContactView page={contactPage} />
    </>
  );
};

export default page;
