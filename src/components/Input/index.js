import React from "react";
import { classNames } from "../../utils/helpers/common";

const Input = ({
  label = "",
  name = "",
  type = "text",
  onChange = () => {},
  value = "",
  error = "",
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start mb-2 text-sm",
        fullWidth ? "w-full" : ""
      )}
    >
      {label && (
        <label
          className={classNames(
            "ml-2 text-sm mb-1",
            error ? "text-red-600" : "text-primary"
          )}
        >
          {label}
        </label>
      )}
      <input
        className={classNames(
          "border rounded-lg p-2",
          error ? "border-red-600" : "border-primary",
          fullWidth ? "w-full" : ""
        )}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      {error && <span className="ml-2 text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
