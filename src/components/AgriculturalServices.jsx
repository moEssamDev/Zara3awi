import React from "react";
import { services } from "../assets/assets.js";

const agriculturalServices = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl lg:text-4xl text-green-800 font-bold mb-6">
        الخدمات الزراعية
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default agriculturalServices;
