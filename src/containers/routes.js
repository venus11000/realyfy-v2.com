import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Service from "./Service";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ContactUsRequests from "./ContactUsRequests";
import ServicingRequests from "./ServicingRequests";
import RealEstate from "./RealEstate";
import Interiors from "./Interiors";
import Finance from "./Finance";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/servicing" element={<Service />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/requests/contact-us"
          element={<ContactUsRequests />}
        />
        <Route
          path="/dashboard/requests/servicing"
          element={<ServicingRequests />}
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default AppRoutes;
