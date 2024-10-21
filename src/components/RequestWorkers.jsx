import React, { useState } from "react";

const RequestWorkers = () => {
  const [workers, setWorkers] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ workers, location, service });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-900">
        طلب عمال
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Number of Workers */}
        <div>
          <label className="block mb-2 text-gray-700">عدد العمال:</label>
          <input
            type="number"
            value={workers}
            onChange={(e) => setWorkers(e.target.value)}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="أدخل عدد العمال"
          />
        </div>
        {/* Location */}
        <div>
          <label className="block mb-2 text-gray-700">المكان:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="أدخل مكان العمل"
          />
        </div>
        {/* Service */}
        <div>
          <label className="block mb-2 text-gray-700">الخدمة:</label>
          <textarea
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="أدخل تفاصيل الخدمة المطلوبة"
          />
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            إرسال الطلب
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestWorkers;
