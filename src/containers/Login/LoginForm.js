/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import md5 from "md5";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { loginAction } from "../../store/common/User/actions";

const LoginForm = () => {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const { user, signin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.data?.token) {
      navigate("/dashboard");

      setFields({
        email: "",
        password: "",
      });

      setErrors({
        email: "",
        password: "",
      });
    } else if (signin?.error) {
      toast.error(signin?.error?.message || "Something went wrong!");
    }
  }, [user, signin]);

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
      dispatch(loginAction({ ...fields, password: md5(fields.password) }));
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
        loading={signin?.loading}
        disabled={signin?.loading}
      />
    </div>
  );
};

export default LoginForm;
