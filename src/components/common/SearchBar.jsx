import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-[300px]">
      
      <input
        type="text"
        placeholder="Find influencers to collaborate with"
        className="flex-1 outline-none text-sm"
      />

      <Search size={16} className="text-gray-400" />
    </div>
  );
}