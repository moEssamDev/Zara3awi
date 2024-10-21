import React from "react";

const CropTrade = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        خيارات المحصول
      </h1>
      <div className="flex flex-col space-y-4">
        <div className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
          <h2 className="text-xl font-semibold text-center">
            عرض المحصول في المزاد
          </h2>
          <p className="text-center text-gray-600 mt-2">
            قدم محصولك لأفضل العروض في المزاد وحقق أعلى سعر ممكن.
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white">
          <h2 className="text-xl font-semibold text-center">
            بيع المحصول لتاجر
          </h2>
          <p className="text-center text-gray-600 mt-2">
            بيع محصولك مباشرة للتجار المحليين بأسعار تنافسية وسريعة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CropTrade;
