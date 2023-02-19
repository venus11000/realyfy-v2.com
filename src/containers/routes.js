import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
