import React from "react";
import ContactSection from "./contact";
import CommonCard from "@/components/common/common-card";

const ContactView = () => {
  return (
    <div>
      <CommonCard title="Contact" link="contact" text="Contact" />
      <ContactSection />
    </div>
  );
};

export default ContactView;
