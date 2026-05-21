export default function InputField({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="text-sm text-gray-600 block mb-2">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-500"
      />
    </div>
  );
}