"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

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
    <div className="grid md:grid-cols-3 gap-8 bg-black text-white">
      {/* FAQ Section */}
      <div className="md:col-span-2">
        <span className="text-white border border-primary text-sm px-4 py-2 rounded-full">
          Our Service
        </span>
        <h2 className="text-3xl font-bold mb-6">Answers at Your Fingertips</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center text-left p-4 bg-gray-800 hover:bg-gray-700"
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
                <div className="p-4 bg-gray-900 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <Card className="p-6 bg-gray-900 text-white rounded-xl">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-4">
            Contact for support inquiries & collaboration
          </p>
          <Input type="text" placeholder="Name" className="mb-3 bg-gray-800" />
          <Input
            type="email"
            placeholder="Email"
            className="mb-3 bg-gray-800"
          />
          <Input
            type="text"
            placeholder="Subject"
            className="mb-3 bg-gray-800"
          />
          <Textarea placeholder="Message." className="mb-4 bg-gray-800" />
          <Button className="w-full bg-green-500 hover:bg-green-600">
            Send Message
          </Button>
        </Card>

        {/* Contact Us Section */}
        <Card className="p-6 bg-gradient-to-b from-gray-700 to-gray-900 text-white rounded-xl flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-bold mb-2">
            Expert & Experienced Business Services.
          </p>
          <Button className="mt-4 bg-green-500 hover:bg-green-600">
            Contact us
          </Button>
        </Card>
      </div>
    </div>
  );
}
