import React from "react";
import { Link } from "react-router-dom";
import STEMlogo from "../Assests/STEMlogo.png";

const navbar = () => {
  return (
    <header className="sticky top-0 bg-blue-300 max-w-screen-xl mx-auto flex justify-between py-2 px-2 items-center">
      {/* {log} */}
      <div>
        <h2 className="text-black text-3xl font-bold flex ">
          <img src={STEMlogo} alt="STEMlogo" width={150} />
          {/* The STEM School{" "} */}
        </h2>
      </div>
      {/* {Navigation link} */}
      <ul className="flex space-x-8">
        <li className="text-black hover:text-blue underline text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="text-black hover:text-blue underline text-2xl">
          <Link to="/Admission">Admission</Link>
        </li>
        <li className="text-black hover:text-blue underline text-2xl">
          <Link to="/Academic">Academic</Link>
        </li>
        <li className="text-black hover:text-blue underline text-2xl">
          <Link to="/ContactUs">Contac us</Link>
        </li>
      </ul>
    </header>
  );
};
export default navbar;
