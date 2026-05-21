export default function WalletCard() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      
      <div className="flex items-center justify-between">
        
        <div>
          <h3 className="font-semibold">
            Wallet Balance
          </h3>

          <p className="text-sm text-gray-400">
            ₹500.00 available
          </p>
        </div>

        <button className="border border-gray-300 px-4 py-2 rounded-md text-blue-500">
          Apply
        </button>
      </div>
    </div>
  );
}