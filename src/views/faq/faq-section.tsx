"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";

import img from "@/assets/team-single2.jpg";
import Image from "next/image";

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
    <div className="grid md:grid-cols-4 gap-8 bg-black text-white py-12">
      {/* FAQ Section */}
      <div className="md:col-span-3">
        <span className="text-white border border-primary text-sm px-4 py-2 rounded-full">
          FAQ&apos;S
        </span>
        <h2 className="text-3xl font-bold mb-6 mt-6">
          Answers at Your Fingertips
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center text-left p-4 bg-[#313131] cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div
                  className="p-4 bg-[#313131] text-gray-300 cursor-pointer"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="space-y-6">
        <Card className="p-6 bg-black text-white rounded-xl">
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <p className="text-gray-400 mb-4">
            Contact for support inquiries & collaboration
          </p>
          <Input type="text" placeholder="Name" className="mb-3 bg-[#1A1B1D]" />
          <Input
            type="email"
            placeholder="Email"
            className="mb-3 bg-[#1A1B1D]"
          />
          <Input
            type="text"
            placeholder="Subject"
            className="mb-3 bg-[#1A1B1D]"
          />
          <Textarea placeholder="Message." className="mb-4 bg-[#1A1B1D]" />
          <Button className="w-full bg-[#9CFE4F] hover:bg-primary cursor-pointer">
            Send Message
          </Button>
        </Card>

        {/* Contact Us Section */}

        {/* <div className="relative">
          <Image src={img} alt="image not found" className="object-cover" />

          <div className="text-center text-white px-4 py-2 rounded absolute bottom-0">
            <p className="text-2xl font-bold mb-2">
              Expert & Experienced Business Services.
            </p>
            <Button className="bg-[#9CFE4F] cursor-pointer py-6 w-full">
              Contact us
            </Button>
          </div>
        </div> */}

        <div className="relative group cursor-pointer">
          <Image
            src={img}
            alt="image not found"
            className="object-cover w-full h-full"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity"></div>

          <div className="text-center text-white px-4 py-2 rounded absolute bottom-0 w-full">
            <p className="text-2xl font-bold mb-2">
              Expert & Experienced Business Services.
            </p>
            <Button className="bg-[#9CFE4F] cursor-pointer py-6 w-full">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
