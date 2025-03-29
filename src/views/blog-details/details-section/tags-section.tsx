type Props = {};

const TagsSection = (props: Props) => {
  return (
    <div className="md:flex gap-2">
      <span className="text-white py-1 rounded-full font-medium text-lg">
        Tags:
      </span>
      <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
        Design
      </span>
      <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
        Creative
      </span>
      <span className="bg-gray-900 text-white px-5 py-1 rounded-full font-medium text-lg">
        Dark & Light
      </span>
    </div>
  );
};

export default TagsSection;
