import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

type Props = {};

const HomeView = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomeView;
