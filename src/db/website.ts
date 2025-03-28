import paths from "@/router/paths";
import { TWebsite } from "@/types/cms/website";

export const website: TWebsite = {
  title: "Hypomatrix",
  description: `Hypomatrix creative digital agency delivering innovate web Development marketing`,
  phones: ["+1-234-567-8901", "+1-987-654-3210"],
  emails: ["contact@example.com", "support@example.com"],
  addresses: [
    "123 Main Street, New York, NY 10001, USA",
    "456 Elm Street, Los Angeles, CA 90012, USA",
  ],
  socials: [
    { icon: "facebook", href: "https://facebook.com/example" },
    { icon: "x", href: "https://x.com/example" },
    { icon: "linkedin", href: "https://linkedin.com/in/example" },
    { icon: "github", href: "https://github.com/example" },
    { icon: "instagram", href: "https://instagram.com/example" },
  ],
  quickLinks: [
    { title: "About Us", href: paths.about },
    { title: "Contact Us", href: paths.contact },
    { title: "Our Services", href: paths.services.root },
    { title: "Portfolio", href: paths.portfolio.root },
    { title: "FAQ", href: paths.faq },
  ],
  legalLinks: [
    {
      title: "Terms & Conditions",
      href: "/terms-conditions",
    },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ],
  navLinks: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Pages",
      links: [
        { title: "About Us", href: paths.about },
        { title: "Our Services", href: paths.services.root },
        { title: "Service Details", href: paths.services.details("slug") },
        { title: "Our Team", href: paths.team.root },
        { title: "Team Details", href: paths.team.details("slug") },
        { title: "Pricing", href: "/pricing" },
        { title: "FAQ", href: paths.faq },
        { title: "Contact Us", href: paths.contact },
        { title: "404", href: "/404" },
      ],
    },
    {
      title: "Portfolio",
      links: [
        { title: "Projects", href: "/portfolio" },
        { title: "Project Details", href: paths.portfolio.details("slug") },
        { title: "Web Design", href: "/web-design" },
        { title: "Graphic Design", href: "/graphic-design" },
        { title: "UI/UX", href: "/ui-ux" },
        { title: "Branding", href: "/branding" },
      ],
    },
    {
      title: "Blogs",
      links: [
        { title: "Latest News", href: "/blog" },
        { title: "Technology", href: "/technology" },
        { title: "Business", href: "/business" },
        { title: "Lifestyle", href: "/lifestyle" },
      ],
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
};
