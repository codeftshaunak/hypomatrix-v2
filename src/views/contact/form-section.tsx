import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormSection() {
  return (
    <>
      <SectionHeader
        subtitle="Get In Touch"
        title={"Get started and grow your business now."}
        description="Start today to unlock opportunities and drive your business toward
        success."
        className="mb-16 max-w-[600px]"
      />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            placeholder="Name"
            className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
          />
          <Input
            placeholder="Email"
            className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
          />
        </div>
        <Input
          placeholder="Subject"
          className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card"
        />
        <Textarea
          placeholder="Message"
          className="font-heading py-4 h-14 px-4 text-base md:text-lg rounded-xl bg-card min-h-[200px]"
        />
        <Button className="w-full rounded-lg text-lg py-4 mt-5" size={"xl"}>
          Send Message
        </Button>
      </div>
    </>
  );
}
