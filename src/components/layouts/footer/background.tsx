type Props = {};

const FooterBackground = (props: Props) => {
  return (
    <>
      <div className="absolute z-0 bg-primary size-[261px] rounded-full blur-[150px] -left-[150px] -top-[150px] pointer-events-none" />
      <div className="absolute z-0 bg-primary size-[261px] rounded-full blur-[200px] -right-[150px] -bottom-[0] pointer-events-none" />
    </>
  );
};

export default FooterBackground;
