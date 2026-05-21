import InputField from "../common/InputField";
import Button from "../common/Button";

export default function BillingForm() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      
      <h1 className="text-3xl font-bold mb-8">
        Review your details
      </h1>

      <h2 className="text-lg font-semibold mb-6">
        Billing Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />

        <InputField
          label="Email"
          placeholder="abhigyan@getreelax.com"
          type="email"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <div>
          <label className="text-sm text-gray-600 block mb-2">
            State
          </label>

          <select className="w-full border border-gray-300 rounded-md px-4 py-3">
            <option>Select state</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-2">
            City
          </label>

          <select className="w-full border border-gray-300 rounded-md px-4 py-3">
            <option>Select city</option>
          </select>
        </div>

        <InputField
          label="Country"
          placeholder="India"
        />

        <InputField
          label="Pin Code"
          placeholder="Pincode"
        />
      </div>

      <div className="flex justify-end gap-4 mt-10">
        
        <Button
          title="Cancel"
          className="border border-gray-300"
        />

        <Button
          title="Save Details"
          className="bg-blue-500 text-white"
        />
      </div>
    </div>
  );
}