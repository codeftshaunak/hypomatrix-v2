import { blogCategories } from "@/db/blog";

type Props = {};

const CategoriesSection = (props: Props) => {
  return (
    <div className="bg-popover rounded-lg p-10">
      <h3 className="text-heading-4 font-bold mb-4">Categories</h3>
      <div className="space-y-5">
        {blogCategories.map((category, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-white text-heading-6 font-bold">
              {category.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
