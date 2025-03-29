import GridSection from "./grid-section";
import HeroSection from "./hero-section";
import SocialsSection from "./socials-section";
import TagsSection from "./tags-section";
import TestimonialSection from "./testimonial-section";
type Props = {};

const BlogDetails = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Description Section */}
      <section className="w-full py-4">
        <h2 className="text-heading-3 font-bold mt-6">
          Medical Mobile Design & Development{" "}
        </h2>
        <p className="text-gray-400">
          Creating user-friendly medical mobile apps with innovative designs and
          seamless functionality to enhance healthcare accessibility and patient
          engagement. Designing and developing innovative medical mobile apps
          with user-friendly interfaces, advanced features, and secure
          functionality to enhance healthcare delivery, streamline processes,
          and improve patient engagement and satisfaction
        </p>
      </section>
      {/* Description Section */}
      <section className="w-full py-4">
        <h2 className="text-heading-3 font-bold mt-6">Blog Information</h2>
        <p className="text-gray-400">
          Creating user-friendly medical mobile apps with innovative designs and
          seamless functionality to enhance healthcare accessibility and patient
          engagement. Designing and developing innovative medical mobile apps
          with user-friendly interfaces, advanced features, and secure
        </p>
        <p className="text-gray-400">
          A versatile template crafted to narrate the journey of your project,
          detailing its origins, inspirations, and key influences. Functionality
          to enhance healthcare delivery, streamline processes, and improve
          patient engagement and satisfaction
        </p>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Image Grid Section */}
      <GridSection />

      {/* Tags and Social Section */}
      <section className="w-full py-8 border-y border-gray-800">
        <div className="container">
          <div className="md:flex justify-between items-center">
            <TagsSection />
            <SocialsSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
