import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import Container from "../Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="bg-dark-1 py-10">
      <Container className="flex flex-col items-center">
        <Logo className="text-white" />

        <ul className="flex items-center gap-4 text-base text-slate-200 mt-10">
          <li className="hover:text-slate-50 hover:border-b-2 pb-2 font-semibold">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-slate-50 hover:border-b-2 pb-2 font-semibold">
            <Link to="/real-estate">Real Estate</Link>
          </li>
          <li className="hover:text-slate-50 hover:border-b-2 pb-2 font-semibold">
            <Link to="/interiors">Interiors</Link>
          </li>
          <li className="hover:text-slate-50 hover:border-b-2 pb-2 font-semibold">
            <Link to="/servicing">Home Servicing</Link>
          </li>
          <li className="hover:text-slate-50 hover:border-b-2 pb-2 font-semibold">
            <Link to="/finance">Finance</Link>
          </li>
          <li className="pb-2 font-semibold">
            <Link to="/contact-us">
              <Button label="Contact Us" variant="primary" />
            </Link>
          </li>
        </ul>
        <div className="text-gray-400 mt-20">
          © Copyright 2022, Realyfy. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
