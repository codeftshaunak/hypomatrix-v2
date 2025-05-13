"use client";

import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/ui/file-upload";
import { Form } from "@/components/ui/form";
import useContactForm from "@/hooks/use-contact-form";
import { RHFInputField, RHFTextareaField } from "@/lib/rhf";

export default function FormSection() {
  const { handleSubmit, isError, isSuccess, isLoading, options } =
    useContactForm();

  return (
    <Form {...options}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <RHFInputField
              placeholder="Name"
              className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
              name={"name"}
            />
            <RHFInputField
              placeholder="Email"
              className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
              name={"email"}
            />
          </div>

          <div className="w-full max-w-4xl mx-auto border border-dashed dark:bg-black border-neutral-200">
            <FileUpload />
          </div>

          <Button
            className="w-full rounded-lg text-lg py-4 mt-8 md:mt-6"
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
    </Form>
  );
}
