import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <h3 className="text-heading-4 font-heading font-bold">Get In Touch</h3>
        <p className="text-muted-foreground mb-5">
          Contact for support inquiries & collaboration
        </p>
        <Input type="text" placeholder="Name" className="mb-3 border-border" />
        <Input
          type="email"
          placeholder="Email"
          className="mb-3 border-border"
        />
        <Input
          type="text"
          placeholder="Subject"
          className="mb-3 border-border"
        />
        <Textarea placeholder="Message." className="mb-4 border-border" />
        <Button className="w-full">Send Message</Button>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
