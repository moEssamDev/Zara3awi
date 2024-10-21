import React, { Fragment } from "react";
import selling from "../assets/selling.jpg";
import { NavLink } from "react-router-dom";
import agriculture from "../assets/agriculture.jpg";
import market from "../assets/market.jpg";
import workers from "../assets/workers.jpg";
import crops from "../assets/3380873.jpg";

const Hero = () => {
  return (
    <Fragment>
      <div
        style={{ direction: "rtl", textAlign: "right" }}
        className="flex flex-col sm:flex-row"
      >
        {/* Hero Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl lg:text-4xl sm:py-3 leading-relaxed mb-5 font-semibold text-green-800">
              زرعاوي - وجهتك الشاملة للزراعة
            </h1>
            <p className="flex items-center max-w-[500px] text-gray-600">
              هنا تجد جميع خدماتك الزراعية بدءا من شراء الاراضي و بيع محاصيل
              وسوق الكتروني للمنتجات الزراعية وخدمة لتوريد العمال الى جانب
              الخدمات الزراعية الفنية.
            </p>
          </div>
        </div>

        {/* Hero Right Side */}
        <img src={crops} alt="hero img" className="w-full sm:w-1/2" />
      </div>

      <div
        style={{ direction: "rtl", textAlign: "right" }}
        className="w-full mt-12"
      >
        <div className="flex justify-center items-center gap-3">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <h1 className="text-2xl lg:text-5xl sm:py-3 leading-relaxed text-green-950 mb-5">
            !ابرز خدماتنا
          </h1>
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
        </div>

        <div className="w-full mx-auto flex justify-center py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
            <NavLink
              to="/agriculture-services"
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={agriculture}
                alt="خدمات زراعية"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center text-lg font-semibold p-4">
                خدمات زراعية
              </h3>
            </NavLink>
            <NavLink
              to="/crops-trade"
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={selling}
                alt="بيع المحصول"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center text-lg font-semibold p-4">
                بيع المحصول
              </h3>
            </NavLink>
            <NavLink
              to="/shopping"
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={market}
                alt="التسوق"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center text-lg font-semibold p-4">التسوق</h3>
            </NavLink>
            <NavLink
              to="/LaborAndSuppliers"
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={workers}
                alt="توريد العمال"
                className="w-full h-40 object-cover"
              />
              <h3 className="text-center text-lg font-semibold p-4">
                توريد العمال
              </h3>
            </NavLink>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
