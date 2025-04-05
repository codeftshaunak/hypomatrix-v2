"use client";

import { RHFInputField, RHFTextareaField } from "@/components/rhf";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import useContactForm from "@/hooks/use-contact-form";

type Props = {};

const ContactSection = (props: Props) => {
  const { handleSubmit, isError, isSuccess, isLoading, options } =
    useContactForm();

  return (
    <Card>
      <CardContent>
        <Form {...options}>
          <form onSubmit={handleSubmit}>
            <h3 className="text-heading-4 font-heading font-bold">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-5">
              Contact for support inquiries & collaboration
            </p>

            <div className="space-y-1">
              <RHFInputField
                placeholder="Name"
                name="name"
                className="border-border"
              />

              <RHFInputField
                placeholder="Email"
                name="email"
                className="border-border"
              />

              <RHFInputField
                placeholder="Subject"
                name="subject"
                className="border-border"
              />

              <RHFTextareaField
                placeholder="Message"
                name="message"
                className="border-border"
              />

              <Button
                className="w-full mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {isError && (
                <div className="text-red-500 text-sm text-center mt-4">
                  There was an error sending your message. Please try again.
                </div>
              )}

              {isSuccess && (
                <div className="text-green-500 text-sm text-center mt-4">
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
