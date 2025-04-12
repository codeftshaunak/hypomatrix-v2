type Props = {};

const FooterBackground = (props: Props) => {
  return (
    <>
      <div className="absolute z-0 bg-primary size-[261px] rounded-full blur-[150px] -left-[150px] -top-[150px] pointer-events-none" />
      <div className="absolute z-0 inset-0 md:bg-[radial-gradient(ellipse_at_bottom_right,_rgba(100,97,94,0.8)_0%,_transparent_30%)] pointer-events-none" />
    </>
  );
};

export default FooterBackground;
