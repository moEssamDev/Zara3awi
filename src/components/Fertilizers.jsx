import React from "react";

const Fertilizers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        الأسمدة والمخصبات
      </h1>
      <input
        type="text"
        placeholder="ابحث عن منتج معين..."
        className="w-full p-2 mb-6 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد NPK</h2>
          <p className="text-center text-gray-600">السعر: 100 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد عضوي</h2>
          <p className="text-center text-gray-600">السعر: 80 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد سائل</h2>
          <p className="text-center text-gray-600">السعر: 120 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد البوتاسيوم</h2>
          <p className="text-center text-gray-600">السعر: 90 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد فوسفاتي</h2>
          <p className="text-center text-gray-600">السعر: 110 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سماد حيواني</h2>
          <p className="text-center text-gray-600">السعر: 70 جنيه</p>
        </div>
      </div>
    </div>
  );
};

export default Fertilizers;
