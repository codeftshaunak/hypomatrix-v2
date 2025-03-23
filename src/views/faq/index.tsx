import React from "react";
import FAQ from "./faq-section";
import CommonCard from "@/components/common/common-card";

const FaqView = () => {
  return (
    <div>
      <CommonCard title="Faqs" link="faq" text="Faqs" />
      <FAQ />
    </div>
  );
};

export default FaqView;
