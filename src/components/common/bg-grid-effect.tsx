type Props = {};

const BgGridEffect = (props: Props) => {
  return (
    <div className="select-none w-full min-h-screen absolute top-0 lg:-bottom-16 left-0 overflow-hidden -z-[1]">
      {/* Gradient backgrounds - matching the original positioning and colors */}
      <div className="absolute inset-0 size-[400px] blur-[100px] xl:size-[560px] xl:blur-[200px] bg-primary rounded-full -translate-1/2"></div>
      <div className="absolute right-0 size-[400px] blur-[100px] xl:size-[560px] xl:blur-[200px] md:bg-[#8778f5] rounded-full translate-x-1/2 -translate-1/2"></div>
      <div className="absolute left-1/2 bottom-0 size-[500px] blur-[400px] md:bg-[rgba(34,197,94,0.7)] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      {/* Responsive grid - matching the original column/row configuration */}
      <div className="absolute inset-1 -z-[1] grid grid-cols-6 sm:grid-cols-10 md:grid-cols-14 lg:grid-cols-18 grid-rows-4 sm:grid-rows-6 md:grid-rows-8 gap-0 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border md:border-white"></div>
        ))}
      </div>
    </div>
  );
};

export default BgGridEffect;
