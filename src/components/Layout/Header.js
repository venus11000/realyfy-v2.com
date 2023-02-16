import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import Container from "../Container";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between h-24">
        <Logo />

        <ul className="flex items-center gap-4 text-base text-slate-600">
          <li className="hover:text-primary font-semibold">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="hover:text-primary font-semibold">
            <Link to="/real-estate">Real Estate</Link>
          </li>
          <li className="hover:text-primary font-semibold">
            <Link to="/interiors">Interiors</Link>
          </li>
          <li className="hover:text-primary font-semibold">
            <Link to="/servicing">Home Servicing</Link>
          </li>
          <li className="hover:text-primary font-semibold">
            <Link to="/finance">Finance</Link>
          </li>
          <li className="hover:text-primary font-semibold">
            <Link to="/contact-us">
              <Button label="Contact Us" variant="primary" />
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
