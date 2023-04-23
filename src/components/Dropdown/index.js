import React from "react";
import { classNames } from "../../utils/helpers/common";

const Dropdown = ({
  id = "dropdown",
  label = "",
  name = "",
  value = "",
  onChange = () => {},
  options = [],
  error = "",
  required = false,
  fullWidth = false,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-start mb-2 text-sm",
        fullWidth ? "w-full" : ""
      )}
    >
      <label
        for={id}
        className={classNames(
          "ml-2 text-sm mb-1",
          error ? "text-red-600" : "text-primary"
        )}
      >
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        id={id}
        name={name}
        className={classNames(
          "border rounded-lg p-2",
          error ? "border-red-600" : "border-primary",
          fullWidth ? "w-full" : ""
        )}
        value={value}
        onChange={onChange}
      >
        {options?.map((option) => (
          <option value={option?.value || option}>
            {option?.label || option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
