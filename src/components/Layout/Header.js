import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import Container from "../Container";

const Header = () => {
  return (
    <header>
      <Container className="flex items-center justify-between h-24">
        <Link to="/">
          <div className="flex items-center gap-1">
            <div className="w-10 h-10 flex items-center justify-center bg-primary text-white text-2xl font-bold rounded">
              R
            </div>
            <div className="text-primary text-2xl font-bold">Realyfy</div>
          </div>
        </Link>

        <ul className="flex items-center gap-4 text-base text-slate-600">
          <li className="hover:text-primary font-semibold">
            <Link to="/about">About</Link>
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
