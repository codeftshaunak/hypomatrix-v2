import { TWebsite } from "@/types/cms/website";

export const website: TWebsite = {
  phones: ["+1-234-567-8901", "+1-987-654-3210"],
  emails: ["contact@example.com", "support@example.com"],
  addresses: [
    "123 Main Street, New York, NY 10001, USA",
    "456 Elm Street, Los Angeles, CA 90012, USA",
  ],
  socials: [
    { id: "1", icon: "facebook", href: "https://facebook.com/example" },
    { id: "2", icon: "x", href: "https://x.com/example" },
    { id: "3", icon: "linkedin", href: "https://linkedin.com/in/example" },
    { id: "4", icon: "github", href: "https://github.com/example" },
    { id: "5", icon: "instagram", href: "https://instagram.com/example" },
  ],
};
