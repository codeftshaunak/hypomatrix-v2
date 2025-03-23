type Props = {};

const BgGridEffect = (props: Props) => {
  return (
    <div className="select-none">
      {/* Gradient backgrounds - adjusted for better visibility on different screen sizes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.5)_0%,_transparent_50%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.5)_0%,_transparent_50%)] sm:bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.6)_0%,_transparent_40%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.6)_0%,_transparent_40%)] md:bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.8)_0%,_transparent_30%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.8)_0%,_transparent_30%)] -z-[1]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.7)_0%,_transparent_50%)] sm:bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,0.8)_0%,_transparent_45%)] md:bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,1)_0%,_transparent_35%)] -z-[1]"></div>

      {/* Responsive grid - fewer columns on mobile, more on larger screens */}
      <div className="absolute inset-0 -z-[1] grid grid-cols-6 sm:grid-cols-10 md:grid-cols-14 lg:grid-cols-18 grid-rows-4 sm:grid-rows-6 md:grid-rows-8 gap-0 opacity-10 sm:opacity-10 md:opacity-10">
        {/* Dynamic grid cells based on current viewport size */}
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>
    </div>
  );
};

export default BgGridEffect;
