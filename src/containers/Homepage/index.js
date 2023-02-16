import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Layout from "../../components/Layout";

import { exploreSite, keyFeatures } from "../../utils/constants/site-settings";

import HeroSection from "../../assets/images/homepage/hero-section.svg";

const Homepage = () => {
  return (
    <Layout>
      <Container>
        <div className="grid grid-cols-12 py-20">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center text-4xl">
            <span className="font-semibold">
              Are you tired of dealing with multiple companies for your real
              estate needs?
            </span>
            <br />
            <p className="">
              Look no further than{" "}
              <span className="text-primary font-bold">Realyfy!</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex items-center justify-center">
            <img src={HeroSection} alt="hero-section" />
          </div>
        </div>

        <div className="flex flex-col items-center py-20">
          <h1 className="text-primary text-2xl font-extrabold mb-1 text-center">
            FEATURES
          </h1>
          <h2 className="text-gray-600 text-5xl font-semibold mb-6 text-center">
            We have Amazing Features.
          </h2>
          <p className="text-gray-500 text-lg font-semibold text-center max-w-4xl">
            At Realyfy, we offer a wide range of services to help you with all
            your needs. Whether you&#39;re looking for a house to buy or sell,
            home loan, interior design services, or home maintenance, we&#39;ve
            got you covered. With our one-stop-shop approach, we make the real
            estate process simple and stress-free.
          </p>

          <div className="w-full grid grid-cols-3 my-20 gap-10">
            {keyFeatures?.map((feature) => (
              <div className="grid grid-cols-12">
                <div className="col-span-4 text-4xl flex justify-center">
                  <div className="w-20 h-20 flex items-center justify-center border border-gray-300 rounded-full text-primary">
                    {feature.icon}
                  </div>
                </div>
                <div className="col-span-8">
                  <h2 className="text-2xl font-bold mb-2">{feature.heading}</h2>
                  <p className="text-1xl text-gray-500 font-semibold">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center py-20">
            <h1 className="text-primary text-2xl font-extrabold mb-1 text-center">
              Explore
            </h1>

            <h2 className="text-gray-600 text-5xl font-semibold mb-6 text-center">
              Our wide range of services
            </h2>

            <p className="text-gray-500 text-lg font-semibold text-center mb-8 max-w-4xl">
              At Realyfy, we offer a wide range of services to help you with all
              your needs. Whether you&#39;re looking for a house to buy or sell,
              home loan, interior design services, or home maintenance,
              we&#39;ve got you covered. With our one-stop-shop approach, we
              make the real estate process simple and stress-free.
            </p>

            <div className="grid grid-cols-4 gap-3">
              {exploreSite?.map((explore) => (
                <Link to={explore.link}>
                  <div>
                    <img
                      src={explore.image}
                      alt="real-estate"
                      className="w-full h-96 bg-gray-300"
                    />
                    <div className="bg-gray-500 text-xl text-white text-center py-2">
                      {explore.label}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Homepage;
