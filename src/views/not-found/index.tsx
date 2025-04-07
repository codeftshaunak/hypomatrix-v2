import PageHeader from "@/components/common/page-header";
import NotFound from "./not-found";

type Props = {};

const NotFoundView = (props: Props) => {
  return (
    <div>
      <PageHeader
        title={"404 Page"}
        links={[]}
        description={
          "At Hypomatrix, we specialize in delivering strategic growth solutions tailored to elevate your business to new heights."
        }
      />
      <NotFound />
    </div>
  );
};

export default NotFoundView;
