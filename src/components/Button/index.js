import React from "react";
import { classNames } from "../../utils/helpers/common";

const Button = ({
  label = "",
  variant = "primary",
  type = "button",
  fullWidth = false,
  className = "",
}) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-full",
        variant === "primary"
          ? "bg-primary hover:bg-primary-2 text-white font-medium"
          : "",
        fullWidth ? "w-full" : "",
        className
      )}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
