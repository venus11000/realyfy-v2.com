import React from "react";
import { Link } from "react-router-dom";

import { classNames } from "../../utils/helpers/common";

const Logo = ({ className = "text-primary " }) => {
  return (
    <Link to="/">
      <div className="flex items-center gap-1">
        <div className="w-10 h-10 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded">
          R
        </div>
        <div className={classNames("text-2xl font-bold", className)}>
          Realyfy
        </div>
      </div>
    </Link>
  );
};

export default Logo;
