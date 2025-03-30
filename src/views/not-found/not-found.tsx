import Image from "next/image";
import Link from "next/link";
import img from "@/assets/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-28 space-y-2">
      <Image src={img} alt="404 Error" />
      <p className="mt-4 text-lg font-bold font-sans text-heading-4 text-center">
        The page you are looking for doesn’t exist
      </p>
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-primary text-black text-heading-5 font-semibold rounded-full transition cursor-pointer">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
