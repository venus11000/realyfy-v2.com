import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";

import { getContactUsRequests } from "../../api";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";
import PageHeader from "../../components/PageHeader";

const ContactUsRequests = () => {
  const [requests, setRequests] = useState([]);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  if (!authToken) {
    navigate("/");
  }

  const getRequests = async () => {
    const response = await getContactUsRequests();

    if (response?.status === 200) {
      console.log(response?.data);
      setRequests(response?.data?.requests);
    } else {
      setAlert("Something went wrong, Try after sometine!");
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <Layout fullWidthHeader={true} showSidebar={true}>
      <div className="p-4">
        <Breadcrumb
          data={[
            {
              label: "Dashboard",
              link: "/dashboard",
            },
            {
              label: "Contact Us Requests",
              link: "/dashboard/requests/contact-us",
            },
          ]}
          className={"mb-5"}
        />

        <PageHeader
          heading={`Contact Us Requests ${
            requests?.length > 0 ? `(${requests?.length})` : ""
          }`}
        />

        {alert ? (
          <div className="flex items-center justify-between bg-primary px-5 text-white rounded-sm">
            <span className="py-3">{alert}</span>
            <button
              className="text-lg text-white p-3"
              onClick={() => setAlert("")}
            >
              x
            </button>
          </div>
        ) : requests?.length > 0 ? (
          <Table
            data={requests}
            columns={[
              {
                label: "slno",
                accessor: "",
                Cell: (props) => props.index + 1,
              },
              {
                label: "Full Name",
                accessor: "fullName",
              },
              {
                label: "Contact Number",
                accessor: "contactNumber",
              },
              {
                label: "Email",
                accessor: "email",
              },
              {
                label: "Message",
                accessor: "message",
              },
              {
                label: "Status",
                accessor: "status",
              },
            ]}
          />
        ) : (
          <div className="flex items-center justify-between bg-primary px-5 text-white rounded-sm">
            <span className="py-3">No requests yet!</span>
            <button
              className="text-lg text-white p-3"
              onClick={() => setAlert("")}
            >
              x
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ContactUsRequests;
