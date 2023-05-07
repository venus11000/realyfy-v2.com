import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Button from "../../components/Button";

import InteriorsImg from "../../assets/images/interiors/interiors.jpg";

const Interiors = () => {
  return (
    <Layout
      seo={{
        title:
          "Interiors | Realyfy.com | One stop solution for all your real estate, home service needs!",
        url: "https://realyfy.com/interiors",
      }}
    >
      <Container>
        <h1 className="text-primary text-xl md:text-4xl text-center font-semibold mt-5 md:mt-10">
          Interiors
        </h1>
        <h2 className="text-sm md:text-base text-gray-500 text-center mt-2 md:mt-5">
          "We'll help you create a home that's so beautiful, you'll never want
          to leave (but you might have to, because, you know, work and stuff)."
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mt-5 md:mt-10">
          <div className="md:hidden col-span-1 md:col-span-6">
            <img src={InteriorsImg} alt="one-stop-solution" />
          </div>
          <div className="col-span-1 md:col-span-6">
            <h2 className="text-primary text-base md:text-2xl text-justify font-bold mb-5">
              Looking for home interiors?
            </h2>
            <p className="text-sm md:text-xl text-gray-600 text-justify font-medium mb-5">
              <span className="text-primary font-semibold">Realyfy</span> is a
              leading home interior solutions company specializing in
              transforming living spaces into personalized and functional
              sanctuaries. Our team of expert designers work with clients to
              create custom design plans tailored to their style and budget,
              covering every detail from selecting materials to arranging
              furniture and adding finishing touches. We believe that a
              beautiful and inviting home should be accessible to everyone, and
              our interior solutions make it possible for clients to achieve
              their dream home without any hassle. Contact us today to learn how
              we can transform your living space into your ideal sanctuary.
            </p>
            <Link to="/contact-us">
              <Button className="mb-5" label="Contact Us" />
            </Link>
          </div>
          <div className="hidden md:block col-span-1 md:col-span-6">
            <img src={InteriorsImg} alt="one-stop-solution" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Interiors;
