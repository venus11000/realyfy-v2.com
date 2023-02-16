import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import AboutUs from "./AboutUs";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
