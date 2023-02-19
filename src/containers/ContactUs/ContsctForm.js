import React, { useState } from "react";

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

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;

    //   switch(fieldName) {
    //       case ''
    //   }

    setFields({
      ...fields,
      [fieldName]: fieldValue,
    });
  };
  return (
    <div className="flex flex-col items-start max-w-lg">
      <Input
        label="Full Name"
        name="fullName"
        onChange={handleChange}
        value={fields.fullName}
        fullWidth
      />

      <Input
        label="Contact Number"
        name="contactNumber"
        onChange={handleChange}
        value={fields.contactNumber}
        fullWidth
      />

      <Input
        label="Email"
        name="email"
        onChange={handleChange}
        value={fields.email}
        fullWidth
      />

      <TextArea
        label="Message"
        name="message"
        onChange={handleChange}
        value={fields.message}
        fullWidth
      />

      <Button label="Contact Us" />
    </div>
  );
};

export default ContsctForm;
