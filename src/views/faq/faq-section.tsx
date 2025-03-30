import SectionHeader from "@/components/common/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFaqs } from "@/services/apis/faq";

export default async function FAQ() {
  const faqsRes = await getFaqs();

  return (
    <>
      <SectionHeader
        title={"Answers at Your Fingertips"}
        subtitle={"FAQ"}
        className="mb-16"
      />

      <Accordion type="single" collapsible>
        {faqsRes.data?.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
