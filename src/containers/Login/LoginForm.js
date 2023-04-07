import React, { useEffect, useState } from "react";
import md5 from "md5";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import useApi from "../../api/useApi";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";

const LoginForm = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { execute, isLoading, response, error } = useApi(
    // "http://127.0.0.1:8080/api/contact-us/create",
    "/auth/login",
    "POST"
  );

  useEffect(() => {
    console.log(response, error);
    if (response) {
      if (response.status === 200) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN, response.data.token);

        // TODO: set User to redux.
        console.log(response.data);

        // TODO: need to store user to redux.
        // dispatch(getUserDetails());

        navigate("/dashboard");

        setFields({
          email: "",
          password: "",
        });

        setErrors({
          email: "",
          password: "",
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
      case "email":
      case "password":
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
    if (fields.password && fields.email) {
      execute({ ...fields, password: md5(fields.password) });
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
        label="Email"
        name="email"
        onChange={handleChange}
        value={fields.email}
        error={errors.email}
        fullWidth
      />

      <Input
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        value={fields.password}
        error={errors.password}
        fullWidth
      />

      <Button
        label="Login"
        className="mt-5"
        onClick={handleSubmit}
        loading={isLoading}
        disabled={isLoading}
      />
    </div>
  );
};

export default LoginForm;
