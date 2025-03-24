import PageHeader from "@/components/common/page-header";
import ContactSection from "./contact";

const ContactView = () => {
  return (
    <div>
      <PageHeader title="Contact" link="contact" description="Contact" />
      <ContactSection />
    </div>
  );
};

export default ContactView;
