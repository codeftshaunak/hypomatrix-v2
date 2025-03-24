import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import ContactSection from "./contact";

type Props = {
  page: TPage;
};

const ContactView = (props: Props) => {
  const { page } = props;
  return (
    <>
      <PageHeader
        title={page.title}
        links={[
          {
            title: "Contact",
            href: paths.contact,
          },
        ]}
        description={page.description}
      />
      <ContactSection />
    </>
  );
};

export default ContactView;
