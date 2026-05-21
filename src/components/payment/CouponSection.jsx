import { useState } from "react";

export default function CouponSection() {

  const [selectedCoupon, setSelectedCoupon] =
    useState("WELCOME20");

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      
      <div className="flex justify-between items-center mb-5">
        
        <h3 className="font-semibold">
          Apply Coupon
        </h3>

        <span>⌃</span>
      </div>

      <div className="flex gap-3 mb-5">
        
        <input
          type="text"
          placeholder="Enter coupon code"
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none"
        />

        <button className="bg-blue-500 text-white px-5 rounded-md">
          Apply
        </button>
      </div>

      <div className="space-y-3">
        
        <div
          onClick={() => setSelectedCoupon("WELCOME20")}
          className={`border rounded-md p-4 flex justify-between cursor-pointer ${
            selectedCoupon === "WELCOME20"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        >
          <div>
            <p className="font-bold text-sm">
              WELCOME20
            </p>

            <p className="text-xs text-gray-400">
              20% off on your first month
            </p>
          </div>

          <input
            type="radio"
            checked={selectedCoupon === "WELCOME20"}
            readOnly
          />
        </div>

        <div
          onClick={() => setSelectedCoupon("ANNUAL50")}
          className={`border rounded-md p-4 flex justify-between cursor-pointer ${
            selectedCoupon === "ANNUAL50"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
        >
          <div>
            <p className="font-bold text-sm">
              ANNUAL50
            </p>

            <p className="text-xs text-gray-400">
              50% off on annual plans
            </p>
          </div>

          <input
            type="radio"
            checked={selectedCoupon === "ANNUAL50"}
            readOnly
          />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Subtotal
          </span>

          <span>₹14,999.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">
            Tax (18% GST)
          </span>

          <span>₹1,079.64</span>
        </div>

        <div className="flex justify-between text-2xl font-bold pt-4">
          
          <span>Total due today</span>

          <span className="text-blue-500">
            ₹16,078.64
          </span>
        </div>
      </div>

      <button className="w-full bg-blue-500 text-white py-4 rounded-md font-semibold mt-6 hover:bg-blue-600">
        Proceed to Payment
      </button>
    </div>
  );
}