import React from "react";
import PageHeader from "@/components/common/page-header";
import { TPage } from "@/types/cms/page";
import paths from "@/router/paths";
import NotFound from "./not-found";
type Props = {
  page: TPage;
};

const NotFoundView = (props: Props) => {
  const { page } = props;
  return (
    <div>
      <PageHeader
        title={page.title}
        links={[
          {
            title: "404 Page",
            href: paths.contact,
          },
        ]}
        description={page.description}
      />
      <NotFound />
    </div>
  );
};

export default NotFoundView;
