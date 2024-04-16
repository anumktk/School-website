import * as React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Admission from "./Admission";
import Academic from "./Academic";
import ContactUs from "./ContactUs";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Admission />} />
          <Route path="/" element={<Academic />} />
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
