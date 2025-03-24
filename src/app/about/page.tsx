import { aboutPage } from "@/db/pages";
import AboutView from "@/views/about";

type Props = {};

const about = (props: Props) => {
  return (
    <>
      <AboutView page={aboutPage} />
    </>
  );
};

export default about;
