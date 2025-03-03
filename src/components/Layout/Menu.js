import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import Container from "../Container";
import AuthMenu from "./AuthMenu";
import Logo from "./Logo";
import { event } from "../../analytics/gtag";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (menuName = "") => {
    event({
      action: "click",
      category: "Menu",
      label: `${menuName} - clicked`,
      value: 1,
    });
  };

  return (
    <div>
      <ul className="hidden md:flex items-center gap-4 text-base text-slate-600">
        <li className="hover:text-primary font-semibold">
          <Link to="/about-us" onClick={() => handleMenuClick("About Us")}>
            About Us
          </Link>
        </li>
        <li className="hover:text-primary font-semibold">
          <Link
            to="/real-estate"
            onClick={() => handleMenuClick("Real Estate")}
          >
            Real Estate
          </Link>
        </li>
        <li className="hover:text-primary font-semibold">
          <Link to="/interiors" onClick={() => handleMenuClick("Interiors")}>
            Interiors
          </Link>
        </li>
        <li className="hover:text-primary font-semibold">
          <Link
            to="/servicing"
            onClick={() => handleMenuClick("Home Servicing")}
          >
            Home Servicing
          </Link>
        </li>
        <li className="hover:text-primary font-semibold">
          <Link to="/finance" onClick={() => handleMenuClick("Finance")}>
            Finance
          </Link>
        </li>
        <li className="hover:text-primary font-semibold">
          <Link to="/contact-us" onClick={() => handleMenuClick("Contact Us")}>
            <Button label="Contact Us" variant="primary" />
          </Link>
        </li>
        <li
          className="hover:text-primary font-semibold"
          onClick={() => handleMenuClick("Login")}
        >
          <AuthMenu />
        </li>
      </ul>

      {!showMenu && (
        <button
          className="md:hidden w-8 flex flex-col gap-1"
          onClick={() => setShowMenu(true)}
        >
          <div className="h-1 w-full bg-primary rounded-sm"></div>
          <div className="h-1 w-full bg-primary rounded-sm"></div>
          <div className="h-1 w-full bg-primary rounded-sm"></div>
        </button>
      )}

      {showMenu && (
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-white">
          <div className="shadow-xl">
            <Container className="flex items-center justify-between py-3">
              <Logo />
              <button
                className="w-10 h-10 text-primary text-2xl font-semibold"
                onClick={() => setShowMenu(false)}
              >
                X
              </button>
            </Container>
          </div>
          <ul className="flex flex-col text-base text-slate-600">
            <li className="hover:text-primary font-semibold border-b border-primary">
              <Link to="/about-us">
                <button className="px-6 py-4 w-full text-left">About Us</button>
              </Link>
            </li>
            <li className="hover:text-primary font-semibold border-b border-primary">
              <Link to="/real-estate">
                <button className="px-6 py-4 w-full text-left">
                  Real Estate
                </button>
              </Link>
            </li>
            <li className="hover:text-primary font-semibold border-b border-primary">
              <Link to="/interiors">
                <button className="px-6 py-4 w-full text-left">
                  Interiors
                </button>
              </Link>
            </li>
            <li className="hover:text-primary font-semibold border-b border-primary">
              <Link to="/servicing">
                <button className="px-6 py-4 w-full text-left">
                  Home Servicing
                </button>
              </Link>
            </li>
            <li className="hover:text-primary font-semibold border-b border-primary">
              <Link to="/finance">
                <button className="px-6 py-4 w-full text-left">Finance</button>
              </Link>
            </li>
            <li className="grid grid-cols-2 gap-4 p-4">
              <Link to="/login">
                <Button label="Login" variant="secondary" fullWidth />
              </Link>
              <Link to="/contact-us">
                <Button label="Contact Us" variant="primary" fullWidth />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
