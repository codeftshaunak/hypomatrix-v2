type Props = {};

const BgGridEffect = (props: Props) => {
  return (
    <div className="select-none">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.8)_0%,_transparent_30%),radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.8)_0%,_transparent_30%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(34,197,94,1)_0%,_transparent_35%)]"></div>
      <div className="absolute inset-0 grid grid-cols-18 grid-rows-8 gap-0 opacity-10">
        {[...Array(72)].map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>
    </div>
  );
};

export default BgGridEffect;
