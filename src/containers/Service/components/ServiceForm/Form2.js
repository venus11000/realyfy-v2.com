import React, { useEffect, useState } from "react";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const ServiceForm2 = ({ data, handleNext }) => {
  const [fields, setFields] = useState({
    address_line_1: "",
    address_line_2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [errors, setErrors] = useState({
    address_line_1: "",
    address_line_2: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    setFields({
      ...fields,
      pincode: data.pincode,
    });
  }, [data]);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    const newFields = { ...fields };
    const newErrors = { ...errors };

    switch (fieldName) {
      case "address_line_1":
      case "address_line_2":
      case "landmark":
      case "pincode":
      case "city":
      case "state":
        if (fieldValue) {
          newErrors[fieldName] = "";
        } else {
          newErrors[fieldName] = "Required!";
        }
        newFields[fieldName] = fieldValue;
        break;

      default:
        newFields[fieldName] = fieldValue;
        newErrors[fieldName] = "";
        break;
    }

    setFields({ ...newFields });
    setErrors({ ...newErrors });
  };

  const handleSubmit = () => {
    const requiredFields = [
      "address_line_1",
      "address_line_2",
      "landmark",
      "pincode",
      "city",
      "state",
    ];

    const hasData = requiredFields.every((field) => fields[field]);

    if (!hasData) {
      const newErrors = { ...errors };
      requiredFields.map((field) => {
        if (!fields[field]) newErrors[field] = "Required!";
      });
      setErrors({ ...newErrors });
      return;
    }

    const hasError = requiredFields.some((field) => errors[field]);

    if (hasData && !hasError) {
      handleNext(fields);
    }
  };

  return (
    <div className="border border-primary rounded-lg p-5 md:p-10">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Address Details
      </h2>
      <Input
        label="Address Line 1"
        name="address_line_1"
        onChange={handleChange}
        value={fields.address_line_1}
        error={errors.address_line_1}
        fullWidth
      />

      <Input
        label="Address Line 2"
        name="address_line_2"
        onChange={handleChange}
        value={fields.address_line_2}
        error={errors.address_line_2}
        fullWidth
      />

      <Input
        label="Landmark"
        name="landmark"
        onChange={handleChange}
        value={fields.landmark}
        error={errors.landmark}
        fullWidth
      />

      <Input
        label="Pincode"
        name="pincode"
        onChange={handleChange}
        value={fields.pincode}
        error={errors.pincode}
        fullWidth
        disabled={true}
      />

      <Input
        label="City"
        name="city"
        onChange={handleChange}
        value={fields.city}
        error={errors.city}
        fullWidth
      />

      <Input
        label="State"
        name="state"
        onChange={handleChange}
        value={fields.state}
        error={errors.state}
        fullWidth
      />

      <Button label="Next" className="mt-10" onClick={handleSubmit} fullWidth />
    </div>
  );
};

export default ServiceForm2;
