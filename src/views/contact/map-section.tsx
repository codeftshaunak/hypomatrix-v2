import { getWebsite } from "@/services/apis/website";

type Props = {};

const MapSection = async (props: Props) => {
  const webRes = await getWebsite();
  const link = webRes?.data?.mapLink;
  console.log(link);

  return (
    <div>
      <iframe
        className="w-full"
        height={600}
        src={link}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapSection;
