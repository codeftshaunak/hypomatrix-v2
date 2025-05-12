import BlogPostCard from "@/components/cards/blog-post-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCareers } from "@/services/apis/career";
import { ArrowRightIcon, LucideFile } from "lucide-react";
import Link from "next/link";
import CareerCard from "./career-card";

type Props = {};

const PostsWrapper = async (props: Props) => {
  const careerRes = await getCareers();
  const careers = careerRes?.data?.map((career) => career);
  return (
    <div>
      {!careers || careers.length === 0 ? (
        <div className="container lg:py-[130px] py-[50px] px-5">
          <Card className="md:w-[600px] mx-auto py-10">
            <CardContent className="items-center flex flex-col">
              <LucideFile size={48} className="mb-4" />
              <h4 className="text-2xl font-bold mb-2 text-center">
                No Career Updates Yet
              </h4>
              <p className="mb-8 text-lg max-w-md text-center text-muted-foreground">
                There are no career updates to display right now. Please check
                back later for new opportunities and insights.
              </p>
              <Button size={"xl"} asChild variant={"outline"}>
                <Link href="/">
                  Back to Home
                  <ArrowRightIcon />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 py-[50px] md:py-[100px] container">
          {careers.map((career, index) => (
            <CareerCard data={career} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsWrapper;
