import React from "react";
import { classNames } from "../../utils/helpers/common";

const Badge = ({ label, type = "primary" }) => {
  return (
    <button
      className={classNames(
        "px-2 py-1 rounded-full text-xs",
        type === "primary" ? "bg-primary text-white" : "bg-slate-400 text-black"
      )}
    >
      {label}
    </button>
  );
};

export default Badge;
