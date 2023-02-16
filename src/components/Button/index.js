import React from "react";
import { classNames } from "../../utils/helpers/common";

const Button = ({ label = "", variant = "primary", type = "button" }) => {
  return (
    <div
      className={classNames(
        "px-4 py-2 rounded-full",
        variant === "primary"
          ? "bg-primary hover:bg-primary-2 text-white font-medium"
          : ""
      )}
    >
      {label}
    </div>
  );
};

export default Button;
