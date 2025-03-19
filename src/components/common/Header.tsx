import React from "react";

type Props = {
  item: string;
  title: string;
  className: string;
};

const Header: React.FC<Props> = ({ item, title, className }) => {
  return (
    <div className={`${className}`}>
      <h3 className="text-sm tracking-wide text-white flex items-center gap-3">
        {item}
        <span className="h-px w-16 bg-white"></span>
      </h3>
      <h2 className="text-6xl text-white font-bold mt-2">{title}</h2>
    </div>
  );
};

export default Header;
