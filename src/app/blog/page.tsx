import { blogPage } from "@/db/pages";
import BlogView from "@/views/blog";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BlogView page={blogPage} />
    </div>
  );
};

export default page;
