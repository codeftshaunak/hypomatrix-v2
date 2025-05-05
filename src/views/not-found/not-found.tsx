import Image from "next/image";
import Link from "next/link";
import img from "@/assets/404.png";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-28 px-4 space-y-2 h-screen">
      <Image src={img} alt="404 Error" className="w-[200px] md:w-auto" />
      <p className="mt-4 text-lg font-bold font-sans text-heading-4 text-center mb-10">
        The page you are looking for doesn’t exist
      </p>
      <Link href="/">
        <Button size={"xl"}>Back to Home</Button>
      </Link>
    </div>
  );
}
