import React from "react";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import LoginForm from "./LoginForm";
import { LOCAL_STORAGE_KEYS } from "../../utils/constants/site-settings";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate()
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

  if (!authToken) {
    navigate("/");
  };

  return (
    <Layout>
      <Container className="my-32 flex flex-col items-center justify-center">
        {/* <div className="max-w-lg w-full border border-primary rounded-2xl p-10"> */}
        <h1 className="text-center text-3xl text-primary font-semibold mb-10">
          Welcome
        </h1>
        <LoginForm />
        {/* </div> */}
      </Container>
    </Layout>
  );
};

export default Dashboard;
