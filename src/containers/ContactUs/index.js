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
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mt-5 md:mt-10">
          <div className="col-span-6">
            <h1 className="text-primary text-xl md:text-4xl text-center font-semibold mt-5 md:mt-10">
              Contact Us
            </h1>
            <h2 className="text-primary text-base md:text-2xl text-center font-bold mb-5">
              Feel free to <span className="text-primary">get in touch</span>{" "}
              with us.
            </h2>
            <div className="md:hidden col-span-1 md:col-span-6 mb-10">
              <img src={EmailIllustration} alt="one-stop-solution" />
            </div>
            <p className="text-sm md:text-xl text-gray-600 text-justify font-medium mb-5">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us...
            </p>
            <div className="mb-5">
            <ContsctForm />
            </div>
            {/* <p className="text-xl text-gray-600 font-medium mb-5">
              Sometimes you needs a little help from your friends. Or a Realyfy
              support Rep. Don't worry... we're here for you.
            </p> */}
          </div>
          <div className="hidden md:block col-span-1 md:col-span-6">
            <img src={EmailIllustration} alt="one-stop-solution" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactUs;
