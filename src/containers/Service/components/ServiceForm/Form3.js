import React, { useState } from "react";

import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import TextArea from "../../../../components/Input/TextArea";

const ServiceForm3 = ({ loading, handleSubmit }) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    mobile: "",
    comments: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    comments: "",
  });

  // useEffect(() => {
  //   setFields({
  //     ...fields,
  //     pincode: data.pincode,
  //   });
  // }, [data]);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    const newFields = { ...fields };
    const newErrors = { ...errors };

    switch (fieldName) {
      case "name":
      case "email":
      case "mobile":
      case "comments":
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

  const onSubmit = () => {
    const requiredFields = [
      "name",
      "email",
      "mobile",
      // "comments",
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
      handleSubmit(fields);
    }
  };

  return (
    <div className="border border-primary rounded-lg p-5 md:p-10">
      <h2 className="text-2xl font-semibold text-center mb-5">
        Contact Details
      </h2>
      <Input
        label="Name"
        name="name"
        onChange={handleChange}
        value={fields.name}
        error={errors.name}
        fullWidth
      />

      <Input
        label="Email"
        name="email"
        onChange={handleChange}
        value={fields.email}
        error={errors.email}
        fullWidth
      />

      <Input
        label="Mobile"
        name="mobile"
        onChange={handleChange}
        value={fields.mobile}
        error={errors.mobile}
        fullWidth
      />

      <TextArea
        label="Comments"
        name="comments"
        onChange={handleChange}
        value={fields.comments}
        error={errors.comments}
        fullWidth
      />

      <Button
        label="Submit"
        className="mt-10"
        onClick={onSubmit}
        loading={loading}
        fullWidth
      />
    </div>
  );
};

export default ServiceForm3;
