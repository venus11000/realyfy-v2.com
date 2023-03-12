/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import useApi from "../../api/useApi";

const LoginForm = () => {
  const { execute, isLoading, response, error } = useApi(
    // "http://127.0.0.1:8080/api/contact-us/create",
    "/contact-us",
    "GET"
  );

  useEffect(() => {
    execute();
  }, []);

  return (
    <div className="">
      <table>
        <tr>
          <th>Sl No.</th>
          <th>Full Name</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Message</th>
        </tr>
        {response?.data?.requests?.map((request, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{request.fullName}</td>
            <td>{request.contactNumber}</td>
            <td>{request.email}</td>
            <td>{request.message}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LoginForm;
