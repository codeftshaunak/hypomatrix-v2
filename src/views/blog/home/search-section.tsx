import { Search } from "lucide-react";

type Props = {};

const SearchSection = (props: Props) => {
  return (
    <div className="bg-popover rounded-lg p-8">
      <h3 className="text-heading-4 font-bold mb-4">Search here</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-popover rounded-lg py-3 px-4 pr-10 text-sm focus:outline-none ring-1 ring-gray-700"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2">
          <Search size={18} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
