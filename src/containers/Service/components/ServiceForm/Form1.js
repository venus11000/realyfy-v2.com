import React, { useEffect, useState } from "react";

import Dropdown from "../../../../components/Dropdown";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

import { getServices } from "../../../../api";

const ServiceForm1 = ({ handleNext }) => {
  const [services, setServices] = useState([]);
  const [fields, setFields] = useState({
    service: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({
    service: "",
    pincode: "",
  });

  const storeServices = async () => {
    const response = await getServices();

    console.log(response);

    if (response.status === 200) {
      setServices(
        response.data.services.map((service) => ({
          label: service.name,
          value: service._id,
        }))
      );
    }
  };

  useEffect(() => {
    storeServices();
  }, []);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    const newFields = { ...fields };
    const newErrors = { ...errors };

    switch (fieldName) {
      case "service":
        if (fieldValue) {
          newErrors[fieldName] = "";
        }
        newFields[fieldName] = fieldValue;
        break;

      case "pincode":
        if (fieldValue && fieldValue.length === 6) {
          newErrors[fieldName] = "";
        } else if (fieldValue) {
          newErrors[fieldName] = "Invalid Pincode!";
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
    const requiredFields = ["service", "pincode"];

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
    <div className="flex flex-col md:flex-row items-center md:items-end gap-1 md:gap-3">
      <p className="text-lg mb-2">I need a</p>
      <Dropdown
        label="Service"
        name="service"
        options={[{ label: "Choose a Service", value: "" }, ...services]}
        onChange={handleChange}
        value={fields.service}
        error={errors.service}
      />
      <p className="text-lg mb-2">in</p>
      <Input
        label="Pincode"
        name="pincode"
        onChange={handleChange}
        value={fields.pincode}
        error={errors.pincode}
      />

      <Button label="Next" className="mb-2" onClick={handleSubmit} />
    </div>
  );
};

export default ServiceForm1;
