import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link to={"/"}>
        <h1 className="text-green-700 text-3xl font-bold">Zara3awi</h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li className="hover:text-green-800 text-sm hover:font-semibold cursor-pointer">
          Home
        </li>
        <li className="hover:text-green-800 text-sm hover:font-semibold cursor-pointer">
          About
        </li>
        <li className="hover:text-green-800 text-sm hover:font-semibold cursor-pointer">
          Shop
        </li>
        <li className="hover:text-green-800 text-sm hover:font-semibold cursor-pointer">
          Contact
        </li>
      </ul>

      <Link
        to={"/login"}
        className="bg-green-700 font-medium text-white px-8 py-2"
      >
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
