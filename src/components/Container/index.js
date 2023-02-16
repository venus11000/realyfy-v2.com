import React from "react";
import { classNames } from "../../utils/helpers/common";

const Container = ({ className = "", children }) => {
  return (
    <div className={classNames("container mx-auto px-6", className)}>{children}</div>
  );
};

export default Container;
