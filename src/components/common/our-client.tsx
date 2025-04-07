import { getClients } from "@/services/apis/client";
import Image from "next/image";
import CommonMotionBox from "../../lib/motion/common-motion";
import SectionHeader from "./section-header";

const OurClient = async () => {
  const clientsRes = await getClients();

  return (
    <section className="pb-[130px] px-6 text-center">
      <CommonMotionBox>
        <SectionHeader
          title={"Trusted Industry Leader"}
          subtitle={"Our Client"}
          className="mb-[100px] max-w-2xl mx-auto"
          align="center"
        />

        <div className="flex justify-center gap-6 flex-wrap">
          {/* {clientsRes.data?.map((client, index) => (
            <div
              key={index}
              className="size-36 sm:size-52 bg-card rounded-full flex items-center justify-center"
            >
              <Image
                src={client.logo.url}
                alt={client.name}
                width={100}
                height={100}
              />
            </div>
          ))} */}
          {clientsRes.data
            ?.filter((item) => item.logo?.url) // only keep items with a valid image
            .map((client, index) => (
              <div
                key={index}
                className="size-36 sm:size-52 bg-card rounded-full flex items-center justify-center"
              >
                <Image
                  src={client.logo.url}
                  alt={client.name}
                  width={200}
                  height={200}
                />
              </div>
            ))}
        </div>
      </CommonMotionBox>
    </section>
  );
};

export default OurClient;
