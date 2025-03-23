import { TReview } from "@/types/cms/review";
import { Star } from "lucide-react";

type Props = {
  data: TReview;
};

const ReviewCard = (props: Props) => {
  const { data } = props;

  return (
    <article>
      <div className="flex mb-4">
        {[...Array(data.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>

      <blockquote className="text-lg md:text-xl mb-8">{data.quote}</blockquote>

      <div>
        <h3 className="font-bold">{data.name}</h3>
        <p className="text-sm text-muted-foreground">
          {data.position}, {data.company}
        </p>
      </div>
    </article>
  );
};

export default ReviewCard;
