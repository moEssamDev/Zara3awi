import React from "react";
import { suppliers } from "../assets/assets.js";

const Suppliers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        تأجير العمال
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-center mb-2">{`مقاول: ${supplier.name}`}</h2>
            <p className="text-center text-gray-600">
              رقم التواصل: {supplier.contact}
            </p>
            <p className="text-center text-gray-600">
              منطقة العمل: {supplier.area}
            </p>
            <div className="mt-4 flex justify-center">
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                اتصل الآن
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
