import React from "react";
import { classNames } from "../../utils/helpers/common";

import InlineLoader from "../Loader/InlineLoader";

const Button = ({
  label = "",
  variant = "primary",
  type = "button",
  fullWidth = false,
  className = "",
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 flex items-center gap-2 rounded-full",
        disabled
          ? "border border-gray-400 text-gray-400"
          : variant === "primary"
          ? "bg-primary hover:bg-primary-2 text-white font-medium"
          : variant === "secondary"
          ? "border border-primary-2 "
          : "",
        fullWidth ? "w-full" : "",
        className
      )}
      type={type}
    >
      {label}
      {loading && (
        <InlineLoader
          width={"20px"}
          height={"20px"}
          color={
            disabled
              ? "#ccc"
              : variant === "primary"
              ? "#fff"
              : variant === "secondary"
              ? "#ccc"
              : "#000"
          }
        />
      )}
    </button>
  );
};

export default Button;
