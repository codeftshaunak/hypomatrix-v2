"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Can I update the website content myself?",
    answer:
      "We build websites using content management systems (CMS) like WordPress, Shopify, or custom CMS, which allows you to easily update your content, add pages, and make changes without any coding knowledge.",
  },
  {
    question: "What services does your agency offer?",
    answer: "Service details here...",
  },
  {
    question: "Do you offer customized pricing or packages?",
    answer: "Pricing details here...",
  },
  {
    question: "Who will be my point of contact during the project?",
    answer: "Contact details here...",
  },
  {
    question: "Do you offer post-project support or maintenance?",
    answer: "Support details here...",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Revision process here...",
  },
  {
    question: "How do you ensure effective communication with clients?",
    answer: "Communication process here...",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-8 container py-[130px]">
      {/* FAQ Section */}
      <div className="md:col-span-2">
        <SectionHeader
          title={"Answers at Your Fingertips"}
          subtitle={"FAQ"}
          className="mb-16"
        />
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center text-left p-4 bg-card hover:bg-secondary"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-secondary">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <Card>
          <CardContent>
            <h3 className="text-heading-4 font-heading font-bold">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-5">
              Contact for support inquiries & collaboration
            </p>
            <Input type="text" placeholder="Name" className="mb-3" />
            <Input type="email" placeholder="Email" className="mb-3" />
            <Input type="text" placeholder="Subject" className="mb-3" />
            <Textarea placeholder="Message." className="mb-4" />
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>

        {/* Contact Us Section */}
        <Card className="p-6 bg-gradient-to-b from-transparent to-card items-center justify-center text-center gap-0 h-[300px]">
          <p className="text-2xl font-bold mb-5">
            Expert & Experienced Business Services.
          </p>
          <Button>Contact us</Button>
        </Card>
      </div>
    </div>
  );
}
