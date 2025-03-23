import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import img from "@/assets/team-single1.jpg";

const userData = {
  name: "Oliver Bennett",
  position: "CEO & Founder",
  about:
    "I'm Oliver Bennett, a passionate CEO & Founder with a love for innovation. With 10 years of experience in Agenko, I specialize in strategic growth. I take pride in leadership and strive to deliver impactful solutions. Outside of work, I enjoy photography and traveling, always seeking inspiration to fuel my creativity and growth.",
  imageUrl: img,
};

const UserProfile: React.FC = () => {
  return (
    <section className="flex items-center bg-black text-white py-11 gap-16 rounded-lg shadow-lg">
      <Image
        src={userData.imageUrl}
        alt={userData.name}
        className="rounded-lg h-full w-full"
      />
      <div className="pl-6">
        <h1 className="text-3xl font-bold">{userData.name}</h1>
        <h2 className="text-lg text-gray-400">{userData.position}</h2>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">About me</h3>
          <p className="text-gray-300 mt-2">{userData.about}</p>
        </div>
        <div className="flex space-x-4 mt-6">
          <a
            href="#"
            className="text-black text-2xl hover:bg-lime-400 bg-white p-3 rounded-full"
          >
            <Linkedin />
          </a>
          <a
            href="#"
            className="text-black text-2xl hover:bg-lime-400 bg-white p-3 rounded-full"
          >
            <Instagram />
          </a>
          <a
            href="#"
            className="text-black text-2xl hover:bg-lime-400 bg-white p-3 rounded-full"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
