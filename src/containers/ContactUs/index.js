import React from "react";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import ContsctForm from "./ContsctForm";

import EmailIllustration from "../../assets/images/contact-us/email-illustration.svg";

const ContactUs = () => {
  return (
    <Layout
      seo={{
        title:
          "Contact Us | Realyfy.com | One stop solution for all your real estate, home service needs!",
        url: "https://realyfy.com/contact-us",
      }}
    >
      <Container>
        <div className="grid grid-cols-12 items-center gap-10 my-40">
          <div className="col-span-6">
            <h2 className="text-primary text-xl font-bold mb-1">Contact Us</h2>
            <h1 className="text-gray-700 text-6xl font-bold mb-5">
              Feel free to <span className="text-primary">get in touch</span>{" "}
              with us.
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-5">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
            </p>
            <ContsctForm />
            {/* <p className="text-xl text-gray-600 font-medium mb-5">
              Sometimes you needs a little help from your friends. Or a Realyfy
              support Rep. Don't worry... we're here for you.
            </p> */}
          </div>
          <div className="col-span-6">
            <img src={EmailIllustration} alt="one-stop-solution" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
