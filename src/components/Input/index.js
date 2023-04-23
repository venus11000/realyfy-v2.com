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
  disabled = false,
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
            disabled ? "text-gray-500" :
            error ? "text-red-600" : "text-primary"
          )}
        >
          {label}
        </label>
      )}
      <input
        className={classNames(
          "border rounded-lg p-2",
          disabled ? "border-gray-500 cursor-not-allowed text-gray-500" : 
          error ? "border-red-600" : "border-primary",
          fullWidth ? "w-full" : ""
        )}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
      {error && <span className="ml-2 text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
