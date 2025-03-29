import { blogDetails } from "@/db/pages";
import BlogDetailsView from "@/views/blog-details";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <BlogDetailsView page={blogDetails} />
    </div>
  );
}

export default page;
