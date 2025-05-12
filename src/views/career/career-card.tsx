import React from "react";
import { getCareers } from "@/services/apis/career";
import paths from "@/router/paths";
import FeaturedButton from "@/components/buttons/FeaturedButton";
import NonFeaturedButton from "@/components/buttons/NonFeaturedButton";
import { Card, CardContent } from "@/components/ui/card";
import { TCareer } from "@/types/cms/career";

type Props = {
  data: TCareer;
};

const CareerCard = async (props: Props) => {
  const { data } = props;
  return (
    <Card key={data.id} className="rounded-[22px] bg-card">
      <CardContent>
        <h3 className="text-2xl font-bold">{data.position}</h3>
        <p className="text-muted-foreground mt-3 mb-10">
          <span className="text-primary">{data.sector}</span>
          <span> | </span>
          {data.contractType}
          <span> & </span>
          {data.workType}
        </p>

        {data.featured === true ? (
          <FeaturedButton href={paths.careers.details(data.slug)}>
            Learn More
          </FeaturedButton>
        ) : (
          <NonFeaturedButton href={paths.careers.details(data.slug)}>
            Learn More
          </NonFeaturedButton>
        )}
      </CardContent>
    </Card>
  );
};

export default CareerCard;
