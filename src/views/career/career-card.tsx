import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { getCareers } from "@/services/apis/career";
import paths from "@/router/paths";
import FeaturedButton from "@/components/buttons/FeaturedButton";
import NonFeaturedButton from "@/components/buttons/NonFeaturedButton";

type Props = {};

const CareerCard = async (props: Props) => {
  const careerRes = await getCareers();

  return (
    <div className="py-10 px-10 flex flex-wrap justify-between gap-4">
      {careerRes?.data?.map((career) => (
        <BackgroundGradient
          key={career.id}
          className="rounded-[22px] p-4 sm:p-10 bg-zinc-900"
          containerClassName="w-lg"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-bold">{career.position}</h3>
            <div className="flex gap-3">
              <p className="text-gray-300 capitalize">{career.sector}</p>
              <span>|</span>
              <p className="text-gray-300">{career.contractType}</p>
              <span>&</span>
              <p className="text-gray-300">{career.workType}</p>
            </div>

            {career.featured === true ? (
              <FeaturedButton
                href={paths.careers.details(career.slug)}
                className="flex justify-end mt-6"
              >
                Learn More
              </FeaturedButton>
            ) : (
              <NonFeaturedButton
                href={paths.careers.details(career.slug)}
                className="flex justify-end mt-[27px]"
              >
                Learn More
              </NonFeaturedButton>
            )}
          </div>
        </BackgroundGradient>
      ))}
    </div>
  );
};

export default CareerCard;
