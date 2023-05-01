// import React from 'react'

// import Layout from '../../components/Layout'

// const RealEstate = () => {
//   return (
//     <Layout>

//         Welcome to Realyfy, your one-stop destination for all things real estate. Our mission is to provide top-quality real estate services to help you buy, sell, rent, or invest in properties. We are a full-service real estate company that offers a range of services including property management, home loans, interior design, and home services.

// Our team of experienced professionals is dedicated to helping our clients achieve their real estate goals. Whether you are looking for your dream home, seeking to sell your property, or searching for investment opportunities, we have the expertise and resources to help you succeed.

// At Realyfy, we believe that exceptional customer service is the key to success. That's why we are committed to providing our clients with personalized attention and support every step of the way. We work tirelessly to ensure that your real estate experience is smooth, stress-free, and successful.

// Thank you for considering Realyfy for your real estate needs. We look forward to working with you and helping you achieve your real estate goals."
//     </Layout>
//   )
// }

// export default RealEstate

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import OneStopSolution from "../../assets/images/about-us/one-stop-solution.jpg";
import OutTemOfExperiancedProfessionals from "../../assets/images/about-us/our-team-of-experienced-professionals.jpg";
import Faq from "./Faq";

const AboutUs = () => {
  return (
    <Layout
      seo={{
        title:
          "Real Estate | Realyfy.com | One stop solution for all your real estate, home service needs!",
        url: "https://realyfy.com/real-estate",
      }}
    >
      <Container>
        <h1 className="text-primary text-4xl text-center font-semibold mt-10">
          Real Estate
        </h1>
        <div className="grid grid-cols-12 items-center gap-10 my-20">
          <div className="col-span-6">
            <h3 className="text-primary text-xl font-bold mb-1">
              About Realyfy
            </h3>
            <h2 className="text-primary text-4xl font-bold mb-5">
              Your one-stop destination for all things real estate
            </h2>
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

        <div>
          <h2 className="text-primary text-xl text-center font-bold mb-4">
            Our Key Features
          </h2>
          <ul className="m-5 text-gray-600 text-base">
            <li className="mb-2">
              <b>Experienced agents:</b> realyfy has a team of experienced
              agents who can provide personalized attention and guidance to
              clients throughout the buying or selling process.
            </li>
            <li className="mb-2">
              <b>Competitive rates:</b> realyfy is committed to offering
              competitive rates and value to clients for all of their real
              estate needs.
            </li>
            <li className="mb-2">
              <b>Quality properties:</b> realyfy offers quality properties for
              sale or rent that are in compliance with local laws and
              regulations.
            </li>
            <li className="mb-2">
              <b>Home staging and interior design:</b> realyfy offers home
              staging and interior design services to help clients prepare their
              properties for sale.
            </li>
            <li className="mb-2">
              <b>Trusted lenders:</b> realyfy has partnerships with trusted
              lenders who can assist clients in securing home loans or
              mortgages.
            </li>
            <li className="mb-4">
              <b>Exceptional customer service:</b> realyfy is dedicated to
              providing exceptional customer service to all clients, with prompt
              communication and attention to their individual needs.
            </li>
          </ul>
        </div>

        <Faq />
      </Container>
    </Layout>
  );
};

export default AboutUs;
