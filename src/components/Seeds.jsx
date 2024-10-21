import React from "react";

const SeedsAndSeedlings = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        البذور والتقاوي والشتلات
      </h1>
      <input
        type="text"
        placeholder="ابحث عن منتج معين..."
        className="w-full p-2 mb-6 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">بذور طماطم</h2>
          <p className="text-center text-gray-600">السعر: 20 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">بذور فلفل</h2>
          <p className="text-center text-gray-600">السعر: 15 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">شتلات خيار</h2>
          <p className="text-center text-gray-600">السعر: 25 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">بذور باذنجان</h2>
          <p className="text-center text-gray-600">السعر: 18 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">شتلات فراولة</h2>
          <p className="text-center text-gray-600">السعر: 30 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">بذور بطيخ</h2>
          <p className="text-center text-gray-600">السعر: 22 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">شتلات طماطم</h2>
          <p className="text-center text-gray-600">السعر: 28 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">بذور كوسة</h2>
          <p className="text-center text-gray-600">السعر: 16 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">شتلات باذنجان</h2>
          <p className="text-center text-gray-600">السعر: 35 جنيه</p>
        </div>
      </div>
    </div>
  );
};

export default SeedsAndSeedlings;
