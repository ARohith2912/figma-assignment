export default function OrderSummary() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      
      <h2 className="text-2xl font-bold mb-5">
        Order Summary
      </h2>

      <div className="border border-gray-200 rounded-lg p-5">
        
        <div className="flex justify-between">
          
          <div>
            <h1 className="text-4xl font-bold">
              ₹4,999
            </h1>

            <p className="text-gray-500 text-sm">
              /month
            </p>

            <p className="text-xs text-gray-400 mt-2">
              Includes 5,000 credits/mo.
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-blue-500 font-semibold">
              SELECTED PLAN
            </p>

            <p className="font-bold">
              Startup
            </p>
          </div>
        </div>
      </div>

      <button className="w-full border border-blue-300 text-blue-500 rounded-full py-3 mt-5 hover:bg-blue-50">
        Upgrade to Growth Plan
      </button>
    </div>
  );
}