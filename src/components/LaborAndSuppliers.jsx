import React from "react";
import { Link } from "react-router-dom";

const LaborAndSuppliers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        إدارة العمال والموردين
      </h1>
      <div className="flex flex-col space-y-4">
        {/* Request Workers Card */}
        <Link to="/request-workers">
          <div className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white cursor-pointer">
            <h2 className="text-xl font-semibold text-center">اطلب عمالك</h2>
            <p className="text-center text-gray-600 mt-2">
              احصل على العمالة الزراعية المطلوبة بسرعة وسهولة لإتمام أعمالك.
            </p>
          </div>
        </Link>
        {/* Contact Supplier Card */}
        <Link to="/suppliers">
          <div className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white cursor-pointer">
            <h2 className="text-xl font-semibold text-center">تواصل مع مورد</h2>
            <p className="text-center text-gray-600 mt-2">
              تواصل مع الموردين الزراعيين للحصول على الأدوات أو المواد التي
              تحتاجها.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LaborAndSuppliers;
