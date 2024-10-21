import React from "react";

const Irrigation = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        شبكات الري
      </h1>
      <input
        type="text"
        placeholder="ابحث عن منتج معين..."
        className="w-full p-2 mb-6 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">أنابيب ري</h2>
          <p className="text-center text-gray-600">السعر: 150 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مضخة ري</h2>
          <p className="text-center text-gray-600">السعر: 1200 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">رشاش مياه</h2>
          <p className="text-center text-gray-600">السعر: 80 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">فلاتر مياه</h2>
          <p className="text-center text-gray-600">السعر: 200 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">أنظمة تحكم آلي</h2>
          <p className="text-center text-gray-600">السعر: 900 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">صمامات تحكم</h2>
          <p className="text-center text-gray-600">السعر: 50 جنيه</p>
        </div>
      </div>
    </div>
  );
};

export default Irrigation;
