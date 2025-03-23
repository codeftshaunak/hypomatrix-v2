import img from "@/assets/blog1.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../../components/common/section-header";

const articles = [
  {
    id: 1,
    category: "Website",
    title: "MKT Gency for your online business Plane.",
    description:
      "Strategic marketing agency boosting to your online business success.",
    date: "15 Apr, 2024",
    image: "https://via.placeholder.com/260", // Replace with actual image
  },
  {
    id: 2,
    category: "Website",
    title: "Meeting Collaboration for your business.",
    description:
      "Seamless meeting collaboration tools to enhance your business.",
    date: "15 Apr, 2024",
    image: "https://via.placeholder.com/260", // Replace with actual image
  },
];

export default function LatestArticles() {
  return (
    <section className="py-16 container">
      <div className="flex justify-between items-center mb-8">
        <SectionHeader
          subtitle="Latest Articles"
          title="Stay Updated with Our Recent Articles"
          className="w-[700px] mb-6"
        />
        <Button
          variant="outline"
          className="flex items-center gap-2 cursor-pointer border-gray-700 rounded-full hover:bg-primary hover:border-none"
        >
          View all Blogs <ArrowUpRight size={18} />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <Card key={article.id} className="bg-gray-950 rounded-xl">
            <CardContent className="flex gap-4 items-center">
              <Image
                src={img}
                alt={article.title}
                className="w-52 h-52 object-cover rounded-lg"
              />
              <div>
                <span className="border border-gray-700 rounded-full text-sm py-2 px-4 cursor-pointer">
                  {article.category}
                </span>
                <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                <p className="text-gray-400 text-sm mt-1">
                  {article.description}
                </p>
                <div className="flex justify-between mt-3">
                  <p className="text-gray-500 text-sm mt-2">{article.date}</p>
                  <div className="text-black bg-white p-1 rounded-full cursor-pointer">
                    <Plus size={20} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
