import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import OneStopSolution from "../../assets/images/about-us/one-stop-solution.jpg";
import OutTemOfExperiancedProfessionals from "../../assets/images/about-us/our-team-of-experienced-professionals.jpg";

const AboutUs = () => {
  return (
    <Layout
      seo={{
        title:
          "About Us | Realyfy.com | One stop solution for all your real estate, home service needs!",
        url: "https://realyfy.com/about-us",
      }}
    >
      <Container>
        <div className="grid grid-cols-12 items-center gap-10 my-40">
          <div className="col-span-6">
            <h2 className="text-primary text-xl font-bold mb-1">
              About Realyfy
            </h2>
            <h1 className="text-primary text-4xl font-bold mb-5">
              Your one-stop destination for all things real estate
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-5">
              Welcome to Realyfy, your one-stop destination for all things real
              estate. Our mission is to provide top-quality real estate services
              to help you buy, sell, rent, or invest in properties. We are a
              full-service real estate company that offers a range of services
              including property management, home loans, interior design, and
              home services.
            </p>
            <Link to="/contact-us">
              <Button label="Contact Us" />
            </Link>
          </div>
          <div className="col-span-6">
            <img src={OneStopSolution} alt="one-stop-solution" />
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-10 my-40">
          <div className="col-span-6">
            <img
              src={OutTemOfExperiancedProfessionals}
              alt="one-stop-solution"
            />
          </div>
          <div className="col-span-6">
            <h2 className="text-primary text-xl font-bold mb-1">Our Mission</h2>
            <h1 className="text-primary text-4xl font-bold mb-5">
              Our team of experienced professionals Aims to provide customer
              extrensic services.
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-5">
              Our team of experienced professionals is dedicated to helping our
              clients achieve their real estate goals. Whether you are looking
              for your dream home, seeking to sell your property, or searching
              for investment opportunities, we have the expertise and resources
              to help you succeed.
            </p>
            <Link to="/contact-us">
              <Button label="Contact Us" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 items-center gap-10 my-40">
          <div className="col-span-6">
            {/* <h2 className="text-primary text-xl font-bold mb-1">
              About Realyfy
            </h2> */}
            <h1 className="text-primary text-4xl font-bold mb-5">
              Exceptional customer service is the key to success
            </h1>
            <p className="text-xl text-gray-600 font-medium mb-5">
              At Realyfy, we believe that exceptional customer service is the
              key to success. That's why we are committed to providing our
              clients with personalized attention and support every step of the
              way. We work tirelessly to ensure that your real estate experience
              is smooth, stress-free, and successful.
            </p>
            <Link to="/contact-us">
              <Button label="Contact Us" />
            </Link>
          </div>
          <div className="col-span-6">
            <img src={OneStopSolution} alt="one-stop-solution" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default AboutUs;
