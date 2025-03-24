import React from "react";
import FAQ from "./faq-section";
import PageHeader from "@/components/common/page-header";

const FaqView = () => {
  return (
    <div>
      <PageHeader title="Faqs" link="faq" text="Faqs" />
      <FAQ />
    </div>
  );
};

export default FaqView;
