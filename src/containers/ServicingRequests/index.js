import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";
import PageHeader from "../../components/PageHeader";
import Badge from "../../components/Badge";

import { getServiceRequests } from "../../api";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";

const ServicingRequests = () => {
  const [requests, setRequests] = useState([]);
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  if (!authToken) {
    navigate("/");
  }

  const getRequests = async () => {
    const response = await getServiceRequests();

    if (response?.status === 200) {
      console.log(response?.data);
      setRequests(response?.data?.servicesRequest);
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
              label: "Servicing",
              link: "/dashboard/requests/servicing",
            },
          ]}
          className={"mb-5"}
        />

        <PageHeader
          heading={`Serving Requests ${
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
                label: "Customer Details",
                accessor: "",
                Cell: (props) => (
                  <div>
                    <div>
                      <b>Name:</b>
                      {props?.row?.customerDetails?.name}
                    </div>
                    <div>
                      <b>Email:</b>
                      {props?.row?.customerDetails?.email}
                    </div>
                    <div>
                      <b>Mobile:</b>
                      {props?.row?.customerDetails?.mobile}
                    </div>
                  </div>
                ),
              },
              {
                label: "Address Details",
                accessor: "",
                Cell: (props) => (
                  <div>
                    <div>
                      <b>Address Line1:</b>
                      {props?.row?.addressDetails?.address_line_1}
                    </div>
                    <div>
                      <b>Address Line2:</b>
                      {props?.row?.addressDetails?.address_line_2}
                    </div>
                    <div>
                      <b>Landmark:</b>
                      {props?.row?.addressDetails?.landmark}
                    </div>
                    <div>
                      <b>City:</b>
                      {props?.row?.addressDetails?.city}
                    </div>
                    <div>
                      <b>State:</b>
                      {props?.row?.addressDetails?.state}
                    </div>
                    <div>
                      <b>Pincode:</b>
                      {props?.row?.addressDetails?.pincode}
                    </div>
                  </div>
                ),
              },
              {
                label: "Request Type",
                Cell: (props) => (
                  <div>
                    {props?.row?.serviceInfo?.map((service) => (
                      <Badge label={service?.name} key={service?._id} />
                    ))}
                  </div>
                ),
              },
              {
                label: "Comments",
                accessor: "comments",
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

export default ServicingRequests;
