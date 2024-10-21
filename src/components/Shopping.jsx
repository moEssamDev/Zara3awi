import React from "react";
import { Link } from "react-router-dom";
import { shoppingCategory } from "../assets/assets.js";

const ServicesList = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        السوق
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoppingCategory.map((shoppingCategory, index) => (
          <Link to={shoppingCategory.path} key={index}>
            <div
              key={index}
              className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white"
            >
              <img
                src={shoppingCategory.image}
                alt={shoppingCategory.title}
                className="w-full h-44 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold text-center mt-2">
                {shoppingCategory.title}
              </h2>
              <p className="text-center text-gray-600 mt-2">
                {shoppingCategory.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
