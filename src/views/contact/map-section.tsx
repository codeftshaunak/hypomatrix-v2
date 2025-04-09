import { getWebsite } from "@/services/apis/website";

type Props = {};

const MapSection = async (props: Props) => {
  const webRes = await getWebsite();
  const link = webRes?.data?.mapLink;

  return (
    <div>
      <iframe
        className="w-full"
        height={600}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14524.327393148526!2d91.76049816703274!3d24.482620779288002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751748da9fb6127%3A0xb2779a0c3ebdafb6!2sMoulvibazar!5e0!3m2!1sen!2sbd!4v1743839945405!5m2!1sen!2sbd"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
