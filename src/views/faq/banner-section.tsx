import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type Props = {};

const BannerSection = (props: Props) => {
  return (
    <Card className="p-6 bg-gradient-to-b from-transparent to-card items-center justify-center text-center gap-0 h-[300px]">
      <p className="text-2xl font-bold mb-5">
        Expert & Experienced Business Services.
      </p>
      <Button>Contact us</Button>
    </Card>
  );
};

export default BannerSection;
