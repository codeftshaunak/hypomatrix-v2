import { getWebsite } from "@/services/apis/website";

type Props = {};

const MapSection = async (props: Props) => {
  const webRes = await getWebsite();
  const link = webRes?.data?.mapLink;

  return (
    <div className="pb-[50px]">
      <iframe
        className="w-full md:h-[600px] h-[300px] rounded-md"
        src={link}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
