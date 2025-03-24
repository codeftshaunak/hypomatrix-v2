import OurClient from "@/components/common/our-client";
import PageHeader from "@/components/common/page-header";
import paths from "@/router/paths";
import { TPage } from "@/types/cms/page";
import Hero from "./hero";
import HowWeAre from "./how-we";
import { TeamSection } from "./team";
import { TestimonialsSection } from "./testimonials";

type Props = {
  page: TPage;
};

const AboutView = (props: Props) => {
  const { page } = props;

  return (
    <>
      <PageHeader
        title={page.title}
        links={[{ title: page.title, href: paths.about }]}
        description={page.description}
      />
      <Hero />
      <HowWeAre />
      <TeamSection />
      <TestimonialsSection />
      <OurClient />
    </>
  );
};

export default AboutView;
