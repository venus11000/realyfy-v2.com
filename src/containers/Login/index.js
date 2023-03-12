import React from "react";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import LoginForm from "./LoginForm";

const ContactUs = () => {
  return (
    <Layout>
      <Container className="my-32 flex flex-col items-center justify-center">
        <div className="max-w-lg w-full border border-primary rounded-2xl p-10">
        <h1 className="text-center text-3xl text-primary font-semibold mb-10">Login</h1>
        <LoginForm />
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
