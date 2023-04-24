import React from "react";
import { Link } from "react-router-dom";

import { classNames } from "../../utils/helpers/common";

const Breadcrumb = ({ data, className }) => {
  return (
    <div className={classNames("flex items-center gap-2", className)}>
      {data?.map((ele, index) => (
        <>
          <Link
            className={classNames(
              "text-gray-400",
              index === data?.length - 1 ? "text-gray-600" : ""
            )}
            to={ele.link}
          >
            {ele.label}
          </Link>
          {index !== data?.length - 1 && "/"}
        </>
      ))}
    </div>
  );
};

export default Breadcrumb;
