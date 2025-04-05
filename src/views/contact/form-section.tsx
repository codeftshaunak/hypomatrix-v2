"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useContactSubmit from "@/hooks/use-contact-submit";
import { useState } from "react";

export default function FormSection() {
  const { isLoading, isError, isSuccess, submit } = useContactSubmit();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await submit({ name, email, subject, message });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SectionHeader
        subtitle="Get In Touch"
        title={"Get started and grow your business now."}
        description="Start today to unlock opportunities and drive your business toward success."
        className="mb-16 max-w-[600px]"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Name"
            className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Email"
            className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Input
          placeholder="Subject"
          className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <Textarea
          placeholder="Message"
          className="font-heading py-4 px-4 text-base md:text-lg rounded-xl bg-card min-h-[200px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          className="w-full rounded-lg text-lg py-4 mt-5"
          size={"xl"}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>

        {isError && (
          <div className="text-red-500 text-center mt-4">
            There was an error sending your message. Please try again
          </div>
        )}
        {isSuccess && (
          <div className="text-green-500 text-center mt-4">
            Message sent successfully! Thank you for reaching out.
          </div>
        )}
      </div>
    </form>
  );
}
