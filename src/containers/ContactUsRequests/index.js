import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";
import Tabs from "../../components/Tabs";
import Dropdown from "../../components/Dropdown";
import PageHeader from "../../components/PageHeader";
import InlineLoader from "../../components/Loader/InlineLoader";

import { getContactUsRequests } from "../../api";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";
import { requestStatus } from "../../constants/common";

const ContactUsRequests = () => {
  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  if (!authToken) {
    navigate("/");
  }

  const getRequests = async (status) => {
    setIsLoading(true);
    const payload = {
      status,
    };
    const response = await getContactUsRequests(payload);

    if (response?.status === 200) {
      console.log(response?.data);
      setRequests(response?.data?.requests);
      setIsLoading(false);
    } else {
      setAlert("Something went wrong, Try after sometine!");
      setIsLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleStatusUpdate = (event) => {
    console.log("status", event.target.value)

  }

  useEffect(() => {
    setActiveTab(requestStatus[0]);
  }, []);

  useEffect(() => {
    if (activeTab?.value) {
      getRequests(activeTab?.value);
    }
  }, [activeTab]);

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
        ) : isLoading ? (
          <div className="flex items-center justify-center w-full">
            <InlineLoader color="#6415ff" />
          </div>
        ) : (
          <div>
            <Tabs
              tabs={requestStatus}
              activeTab={activeTab?.value}
              handleClick={handleTabChange}
            />
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
                  Cell: (data) => {
                    console.log(data)
                    return <Dropdown options={requestStatus} onChange={handleStatusUpdate} value={data?.status}/>
                  }
                },
              ]}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ContactUsRequests;
