import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useApi from "../../api/useApi";

import Button from "../../components/Button";
import Input from "../../components/Input";
import TextArea from "../../components/Input/TextArea";

const ContsctForm = () => {
  const [fields, setFields] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const { execute, isLoading, response, error } = useApi(
    // "http://127.0.0.1:8080/api/contact-us/create",
    "http://api.realyfy.com/api/contact-us/create",
    "POST"
  );

  useEffect(() => {
    console.log(response, error);
    if (response) {
      if (response.status === 200) {
        toast.success(response.data.message || "successfully received!");
        setFields({
          fullName: "",
          contactNumber: "",
          email: "",
          message: "",
        });

        setErrors({
          fullName: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong!");
      }
    } else if (error) {
      toast.error("Something went wrong!");
    }
  }, [response, error]);

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    switch (fieldName) {
      case "fullName":
      case "contactNumber":
      case "email":
      case "message":
        fields[fieldName] = fieldValue;
        if (!fieldValue) {
          errors[fieldName] = "Required!";
        } else {
          errors[fieldName] = "";
        }
        break;

      default:
        fields[fieldName] = fieldValue;
        errors[fieldName] = "";
        break;
    }

    setFields({
      ...fields,
    });
    setErrors({
      ...errors,
    });
  };

  const handleSubmit = () => {
    if (
      fields.fullName &&
      fields.contactNumber &&
      fields.email &&
      fields.message
    ) {
      execute(fields);
    } else {
      Object.keys(fields).map((field) => {
        if (!fields[field]) errors[field] = "Required";
        return null;
      });

      setErrors({ ...errors });
    }
  };

  return (
    <div className="flex flex-col items-start max-w-lg">
      <Input
        label="Full Name"
        name="fullName"
        onChange={handleChange}
        value={fields.fullName}
        error={errors.fullName}
        fullWidth
      />

      <Input
        label="Contact Number"
        name="contactNumber"
        onChange={handleChange}
        value={fields.contactNumber}
        error={errors.contactNumber}
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

      <TextArea
        label="Message"
        name="message"
        onChange={handleChange}
        value={fields.message}
        error={errors.message}
        fullWidth
      />

      <Button
        label="Contact Us"
        onClick={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
      />
    </div>
  );
};

export default ContsctForm;
