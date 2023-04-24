import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "../../components/Layout";
import Breadcrumb from "../../components/Breadcrumb";

import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  if (!authToken) {
    navigate("/");
  }

  return (
    <Layout fullWidthHeader={true} showSidebar={true}>
      <div className="p-4">
        <Breadcrumb
          data={[
            {
              label: "Dashboard",
              link: "/dashboard",
            },
          ]}
          className={"mb-5"}
        />
        <h1 className="text-2xl text-primary">
          Welcome <span className="font-semibold">{user?.data?.fullName}!</span>
        </h1>
      </div>
    </Layout>
  );
};

export default Dashboard;
