import { notFound } from "@/db/pages";
import NotFoundView from "@/views/not-found";

export default function NotFound() {
  return (
    <>
      <NotFoundView page={notFound} />
    </>
  );
}
