import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Button from "../../components/Button";

import FinanceImg from "../../assets/images/Finance/finance-img.png";

const Finance = () => {
  return (
    <Layout
      seo={{
        title:
          "Finance | Realyfy.com | One stop solution for all your real estate, home service needs!",
        url: "https://realyfy.com/finance",
      }}
    >
      <Container>
        <h1 className="text-primary text-xl md:text-4xl text-center font-semibold mt-5 md:mt-10">
          Finance
        </h1>
        <h2 className="text-sm md:text-base text-gray-500 text-center mt-2 md:mt-5">
          "Simplify Your Home Financing Journey with Realyfy's Quick and Easy
          Home Loans."
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-10 mt-5 md:mt-10">
          <div className="md:hidden col-span-1 md:col-span-6">
            <img src={FinanceImg} alt="one-stop-solution" />
          </div>
          <div className="col-span-1 md:col-span-6">
            <h2 className="text-primary text-base md:text-2xl text-justify font-bold mb-5">
              Looking for a home loan? <br />
              Realyfy can help! Our experienced team of mortgage professionals
              can guide you through the process and help you find the right loan
              to fit your needs.
            </h2>
            <p className="text-sm md:text-xl text-gray-600 text-justify font-medium mb-5">
              <span className="text-primary font-semibold">Realyfy</span> offers
              a range of home loan options, including fixed-rate mortgages,
              adjustable-rate mortgages, home construction loans, home
              renovation loans, and more. Our online application process is
              quick and easy, and our mortgage calculators can help you estimate
              your monthly payments and explore different loan scenarios.
            </p>
            <p className="text-sm md:text-xl text-gray-600 text-justify font-medium mb-5">
              At <span className="text-primary font-semibold">Realyfy</span>, we
              understand that buying a home in India can be a complex process.
              That's why we offer personalized assistance to help you navigate
              the eligibility criteria, documentation requirements, and interest
              rates. Contact us today to learn more about our home loan
              offerings and start your journey towards homeownership in India.
            </p>
            <Link to="/contact-us">
              <Button className="mb-5" label="Contact Us" />
            </Link>
          </div>
          <div className="hidden md:block col-span-1 md:col-span-6">
            <img src={FinanceImg} alt="one-stop-solution" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Finance;
