import React from "react";

const AgriculturalTools = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">أدوات زراعية</h1>
      <input
        type="text"
        placeholder="ابحث عن منتج معين..."
        className="w-full p-2 mb-6 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample product cards */}
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مجزّة</h2>
          <p className="text-center text-gray-600">السعر: 40 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مجرفة</h2>
          <p className="text-center text-gray-600">السعر: 35 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مقص تقليم</h2>
          <p className="text-center text-gray-600">السعر: 50 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">فأس</h2>
          <p className="text-center text-gray-600">السعر: 70 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مشط زراعي</h2>
          <p className="text-center text-gray-600">السعر: 30 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">عربة يدوية</h2>
          <p className="text-center text-gray-600">السعر: 150 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">منجل</h2>
          <p className="text-center text-gray-600">السعر: 25 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مطرقة</h2>
          <p className="text-center text-gray-600">السعر: 45 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">سطل ماء</h2>
          <p className="text-center text-gray-600">السعر: 20 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">خرطوم مياه</h2>
          <p className="text-center text-gray-600">السعر: 60 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">رشاش ماء</h2>
          <p className="text-center text-gray-600">السعر: 55 جنيه</p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold text-center">مجرفة صغيرة</h2>
          <p className="text-center text-gray-600">السعر: 15 جنيه</p>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalTools;
