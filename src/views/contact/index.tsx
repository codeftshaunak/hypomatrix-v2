import React from "react";
import ContactSection from "./contact";
import PageHeader from "@/components/common/page-header";

const ContactView = () => {
  return (
    <div>
      <PageHeader title="Contact" link="contact" text="Contact" />
      <ContactSection />
    </div>
  );
};

export default ContactView;
