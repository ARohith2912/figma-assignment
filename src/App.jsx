import Navbar from "./components/layout/Navbar";
import BillingForm from "./components/billing/BillingForm";
import OrderSummary from "./components/payment/OrderSummary";
import WalletCard from "./components/payment/WalletCard";
import CouponSection from "./components/payment/CouponSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      
      <Navbar />

      <div className="p-6">
        
        <p className="text-sm text-gray-500 mb-5 cursor-pointer">
          ← Back to plans
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2">
            <BillingForm />
          </div>

          <div className="space-y-5">
            <OrderSummary />
            <WalletCard />
            <CouponSection />
          </div>
        </div>
      </div>
    </div>
  );
}